# Optical interaction update

The homepage uses gentle pointer parallax and a pausable light treatment. Motion stops outside the viewport; touch and reduced-motion users receive a still hero. The dark optical story uses a native sticky layout with scroll progress, no scroll hijacking or added animation library. Its text stays available without JavaScript and becomes a normal stacked section on mobile.

## Volumetric lens study — 2026-09-09

The dark story now includes an independently modelled 3D IOL inspired by the existing artwork. The optic has closed biconvex geometry; the two bevelled haptics have openings at their roots. Transmission, studio reflections and a normal-dependent edge coating show changes in thickness and silhouette during rotation. This is an artistic study, not manufacturer CAD or a source of product measurements.

`components/optical-lens.tsx` retains the original WebP as the server-rendered poster and the “Изображение” view. The asset is unchanged (Git blob `ceab022ac2d81b09c31644000655b015df99ae8b`). It uses `object-fit: contain`, with no image-plane rotation, cropping or scaling animation. The 3D view is implemented in the lazily imported `lib/optical-lens-scene.ts`; Three.js does not load until the scene approaches the viewport.

Visitors can drag the model, rotate with keyboard-accessible buttons, pause/resume motion, reset the angle, and return to the preserved render. The animation is capped at approximately 30 fps, uses a maximum pixel ratio of 1.5, and stops when paused, offscreen, on the image view or in a hidden document. Reduced-motion preference initializes it paused. Failed initialization or context loss returns to the image; unmounting releases the scene, observers and event listeners.

Browser checks: desktop layouts at 1046 and 1280 px; mobile at 360 px; full silhouette, image dimensions 1536 × 1024, no horizontal overflow, image/3D switching, pause/resume, angle reset, pointer drag and keyboard rotation. The tested scene produced no console errors. Reduced-motion and context-loss fallback were reviewed in code; they were not forced through browser settings.

The short-screen canvas now has an explicit width: limiting its height must not shrink it to an off-centre portrait box.

Equipment and surgery galleries expose three keyboard-accessible detail buttons on the first render, with enlarged crops and catalogue-based explanations. All existing render thumbnails and lightboxes remain. Catalogue cards and product views share native cross-document view-transition names, with standard navigation as a fallback.

Both catalogue routes provide a two- or three-lens comparison with duplicate selection prevention and a differences filter. Missing catalogue parameters are labelled as unspecified. Comparison data is derived on the server; source-photo fields are not passed to the client.

## Generated art

Created with the built-in imagegen tool, using the existing IOL artwork as a shape reference. The approved output was encoded as WebP at quality 92 without resizing (1536 × 1024, 78,618 bytes).

- Website asset: `public/assets/optics/optical-night.webp`
- Full-resolution PNG: `../../outputs/optical-motion/optical-night.png`
- Prompt: `../../outputs/optical-motion/prompt.txt`

## Validation

Run `pnpm exec tsc --noEmit --incremental false` and `pnpm build`. Verify the hero pause, scroll chapters, both interactive galleries, lightbox keyboard dismissal, comparison selection/filter and responsive layout in a browser before deployment.
