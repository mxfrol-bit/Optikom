import * as THREE from 'three';

export type OpticalLensController = {
  setPaused: (paused: boolean) => void;
  setVisible: (visible: boolean) => void;
  rotate: (direction: number) => void;
  reset: () => void;
  dispose: () => void;
};

// An artistic IOL study matching the silhouette of optical-night.webp, not a
// manufacturer's CAD model. Dimensions here are scene units, not specifications.
export function createOpticalLensScene(
  host: HTMLDivElement,
  options: {
    paused: boolean;
    onInteraction: () => void;
    onUnavailable: () => void;
  },
): OpticalLensController {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  const cleanups: (() => void)[] = [() => renderer.dispose()];
  let disposed = false;
  const dispose = () => {
    if (disposed) return;
    disposed = true;
    cleanups.reverse().forEach((cleanup) => cleanup());
  };

  try {
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.domElement.setAttribute('aria-hidden', 'true');
    host.appendChild(renderer.domElement);
    cleanups.push(() => renderer.domElement.remove());

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#071e29');
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 60);
    const model = new THREE.Group();
    scene.add(model);
    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];
    cleanups.push(() => {
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
    });
    const geometry = <T extends THREE.BufferGeometry>(value: T): T => {
      geometries.push(value);
      return value;
    };
    const material = <T extends THREE.Material>(value: T): T => {
      materials.push(value);
      return value;
    };

    // Studio softboxes create reflections that move over the curved surfaces.
    const studio = new THREE.Scene();
    studio.background = new THREE.Color('#11252f');
    const softbox = (
      color: string,
      intensity: number,
      width: number,
      height: number,
      position: [number, number, number],
    ) => {
      const box = new THREE.Mesh(
        geometry(new THREE.PlaneGeometry(width, height)),
        material(
          new THREE.MeshBasicMaterial({
            color: new THREE.Color(color).multiplyScalar(intensity),
            side: THREE.DoubleSide,
          }),
        ),
      );
      box.position.set(...position);
      box.lookAt(0, 0, 0);
      studio.add(box);
    };
    softbox('#85edff', 7, 1.1, 8, [-4, 1, 3]);
    softbox('#ecfaff', 5, 6, 0.7, [0, 5, 2]);
    softbox('#ffc78b', 5, 0.8, 7, [4, 0, 2]);
    softbox('#d7f8ff', 4, 0.5, 5, [-2, -2, -4]);
    softbox('#c7f4ff', 1.6, 0.3, 6, [-2, 1, 5]);
    const pmrem = new THREE.PMREMGenerator(renderer);
    cleanups.push(() => pmrem.dispose());
    const environment = pmrem.fromScene(studio, 0.055);
    cleanups.push(() => environment.dispose());
    scene.environment = environment.texture;
    const keyLight = new THREE.DirectionalLight('#a9efff', 2);
    keyLight.position.set(-3, 2, 4);
    const fillLight = new THREE.DirectionalLight('#ffd1a0', 1.5);
    fillLight.position.set(4, 1, 2);
    scene.add(keyLight, fillLight);

    const glass = material(
      new THREE.MeshPhysicalMaterial({
        color: '#e1f8ff',
        metalness: 0,
        roughness: 0.035,
        transmission: 1,
        thickness: 0.32,
        ior: 1.48,
        attenuationColor: new THREE.Color('#b5eaf2'),
        attenuationDistance: 3,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        envMapIntensity: 1.8,
      }),
    );
    const edgeGlass = material(glass.clone());
    edgeGlass.thickness = 0.1;
    edgeGlass.roughness = 0.1;
    edgeGlass.envMapIntensity = 2.8;
    edgeGlass.ior = 1.62;

    // A closed biconvex optical body, with a real curved front and back surface.
    const profile: THREE.Vector2[] = [];
    for (let i = 0; i <= 28; i++) {
      const radius = (i / 28) * 1.015;
      profile.push(
        new THREE.Vector2(radius, -0.045 - 0.16 * (1 - (radius / 1.015) ** 2)),
      );
    }
    profile.push(
      new THREE.Vector2(1.028, -0.025),
      new THREE.Vector2(1.032, 0),
      new THREE.Vector2(1.028, 0.025),
    );
    for (let i = 28; i >= 0; i--) {
      const radius = (i / 28) * 1.015;
      profile.push(
        new THREE.Vector2(radius, 0.045 + 0.16 * (1 - (radius / 1.015) ** 2)),
      );
    }
    const optic = new THREE.Mesh(
      geometry(new THREE.LatheGeometry(profile, 112)),
      glass,
    );
    optic.rotation.x = Math.PI / 2;
    model.add(optic);

    for (const z of [-0.035, 0.035]) {
      const rim = new THREE.Mesh(
        geometry(new THREE.TorusGeometry(1.015, 0.017, 10, 112)),
        edgeGlass,
      );
      rim.position.z = z;
      model.add(rim);
    }

    // Rounded, ribbon-shaped opposing haptics, including openings at the roots.
    const haptic = new THREE.Shape();
    haptic.moveTo(0.88, -0.42);
    haptic.bezierCurveTo(1.31, -0.26, 1.61, 0.2, 1.61, 0.86);
    haptic.bezierCurveTo(1.62, 1.26, 1.44, 1.72, 1.23, 1.98);
    haptic.bezierCurveTo(1.19, 2.04, 1.09, 1.99, 1.14, 1.9);
    haptic.bezierCurveTo(1.32, 1.57, 1.44, 1.21, 1.42, 0.87);
    haptic.bezierCurveTo(1.41, 0.42, 1.29, 0.28, 0.91, 0.4);
    haptic.quadraticCurveTo(1.06, 0, 0.88, -0.42);
    const opening = new THREE.Path();
    opening.absellipse(1.165, 0.12, 0.084, 0.125, 0, Math.PI * 2, true, -0.25);
    haptic.holes.push(opening);
    const hapticGeometry = geometry(
      new THREE.ExtrudeGeometry(haptic, {
        depth: 0.075,
        bevelEnabled: true,
        bevelThickness: 0.019,
        bevelSize: 0.022,
        bevelSegments: 4,
        curveSegments: 36,
        steps: 1,
      }),
    );
    hapticGeometry.translate(0, 0, -0.0375);
    for (const angle of [0, Math.PI]) {
      const arm = new THREE.Mesh(hapticGeometry, edgeGlass);
      arm.rotation.z = angle;
      model.add(arm);
    }

    // A grazing-angle coating keeps the fine transparent edge legible against
    // the dark page. It follows surface normals, so the highlight has real depth.
    const coating = material(
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        polygonOffset: true,
        polygonOffsetFactor: -1,
        vertexShader: `varying vec3 viewNormal; varying vec3 viewDirection; varying vec3 worldPosition;
        void main() {
          vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
          viewNormal = normalize(normalMatrix * normal);
          viewDirection = -viewPosition.xyz;
          worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * viewPosition;
        }`,
        fragmentShader: `varying vec3 viewNormal; varying vec3 viewDirection; varying vec3 worldPosition;
        void main() {
          float edge = pow(1.0 - abs(dot(normalize(viewNormal), normalize(viewDirection))), 1.6);
          vec3 tint = mix(vec3(0.24, 0.87, 1.0), vec3(1.0, 0.71, 0.4), smoothstep(-0.1, 1.5, worldPosition.x));
          gl_FragColor = vec4(tint, edge * 0.9 + 0.04);
        }`,
      }),
    );
    // oxlint-disable-next-line unicorn/no-useless-spread -- Adding coating meshes mutates children; iterate over a snapshot.
    for (const object of [...model.children]) {
      if (!(object instanceof THREE.Mesh)) continue;
      const sheen = new THREE.Mesh(object.geometry, coating);
      sheen.position.copy(object.position);
      sheen.rotation.copy(object.rotation);
      model.add(sheen);
    }

    // A quiet, continuous studio backdrop gives transparent surfaces depth.
    const backdrop = new THREE.Mesh(
      geometry(new THREE.PlaneGeometry(35, 35)),
      material(
        new THREE.ShaderMaterial({
          vertexShader: `varying vec2 positionXY;
          void main() { positionXY = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
          fragmentShader: `varying vec2 positionXY;
          void main() {
            vec3 color = vec3(0.00212, 0.01298, 0.02217);
            float cyan = exp(-dot((positionXY - vec2(-0.8, 0.25)) / vec2(1.7, 2.1), (positionXY - vec2(-0.8, 0.25)) / vec2(1.7, 2.1)) * 1.6);
            float amber = exp(-dot((positionXY - vec2(1.2, -0.3)) / vec2(1.1, 1.7), (positionXY - vec2(1.2, -0.3)) / vec2(1.1, 1.7)) * 2.0);
            color += vec3(0.0, 0.06, 0.085) * cyan + vec3(0.025, 0.009, 0.002) * amber;
            gl_FragColor = vec4(color, 1.0);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }`,
        }),
      ),
    );
    backdrop.position.z = -2.4;
    scene.add(backdrop);

    let paused = options.paused;
    let visible = true;
    let frame = 0;
    let lastTime = 0;
    let phase = 0;
    let dragging = false;
    let pointerX = 0;
    let pointerY = 0;
    const base = new THREE.Euler(-0.16, -0.64, -0.15);
    model.rotation.copy(base);
    const render = () => {
      if (!disposed) renderer.render(scene, camera);
    };
    const tick = (time: number) => {
      frame = 0;
      if (disposed || paused || !visible || document.hidden || dragging) return;
      const delta = lastTime ? time - lastTime : 0;
      if (delta >= 32 || !lastTime) {
        phase += Math.min(delta, 60) / 1000;
        lastTime = time;
        model.rotation.set(
          base.x + Math.sin(phase * 0.41) * 0.13,
          base.y + Math.sin(phase * 0.34) * 0.52,
          base.z + Math.sin(phase * 0.29) * 0.055,
        );
        render();
      }
      frame = requestAnimationFrame(tick);
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
      if (!disposed && !paused && visible && !document.hidden && !dragging)
        frame = requestAnimationFrame(tick);
    };
    const freeze = () => {
      base.copy(model.rotation);
      phase = 0;
      paused = true;
      schedule();
      options.onInteraction();
    };
    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      if (!width || !height || disposed) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
      camera.position.z = Math.max(
        4.85 / (2 * Math.tan(halfFov)),
        4.15 / (2 * Math.tan(halfFov) * camera.aspect),
      );
      camera.updateProjectionMatrix();
      render();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    cleanups.push(() => resizeObserver.disconnect());
    cleanups.push(() => cancelAnimationFrame(frame));

    const pointerDown = (event: PointerEvent) => {
      if (!event.isPrimary || event.button !== 0) return;
      freeze();
      dragging = true;
      pointerX = event.clientX;
      pointerY = event.clientY;
      host.setPointerCapture(event.pointerId);
      host.dataset.dragging = 'true';
    };
    const pointerMove = (event: PointerEvent) => {
      if (!dragging || !event.isPrimary) return;
      base.y += (event.clientX - pointerX) * 0.008;
      base.x = THREE.MathUtils.clamp(
        base.x + (event.clientY - pointerY) * 0.005,
        -1.1,
        1.1,
      );
      pointerX = event.clientX;
      pointerY = event.clientY;
      model.rotation.copy(base);
      render();
    };
    const pointerUp = () => {
      dragging = false;
      host.dataset.dragging = 'false';
    };
    const contextLost = (event: Event) => {
      event.preventDefault();
      dispose();
      options.onUnavailable();
    };
    host.addEventListener('pointerdown', pointerDown);
    host.addEventListener('pointermove', pointerMove);
    host.addEventListener('pointerup', pointerUp);
    host.addEventListener('pointercancel', pointerUp);
    host.addEventListener('lostpointercapture', pointerUp);
    renderer.domElement.addEventListener('webglcontextlost', contextLost);
    document.addEventListener('visibilitychange', schedule);
    cleanups.push(() => {
      host.removeEventListener('pointerdown', pointerDown);
      host.removeEventListener('pointermove', pointerMove);
      host.removeEventListener('pointerup', pointerUp);
      host.removeEventListener('pointercancel', pointerUp);
      host.removeEventListener('lostpointercapture', pointerUp);
      renderer.domElement.removeEventListener('webglcontextlost', contextLost);
      document.removeEventListener('visibilitychange', schedule);
    });
    resize();
    schedule();

    return {
      setPaused(value) {
        if (paused === value || disposed) return;
        base.copy(model.rotation);
        phase = 0;
        paused = value;
        schedule();
      },
      setVisible(value) {
        if (visible === value || disposed) return;
        visible = value;
        schedule();
      },
      rotate(direction) {
        if (disposed) return;
        freeze();
        base.y += direction * 0.3;
        model.rotation.copy(base);
        render();
      },
      reset() {
        if (disposed) return;
        base.set(-0.16, -0.64, -0.15);
        phase = 0;
        model.rotation.copy(base);
        render();
      },
      dispose,
    };
  } catch (error) {
    dispose();
    throw error;
  }
}
