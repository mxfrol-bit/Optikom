# Optical interaction update

The homepage uses gentle pointer parallax and a pausable light treatment. Motion stops outside the viewport; touch and reduced-motion users receive a still hero. The dark optical story uses a native sticky layout with scroll progress, no scroll hijacking or added animation library. Its text stays available without JavaScript and becomes a normal stacked section on mobile.

Equipment and surgery galleries expose three keyboard-accessible detail buttons on the first render, with enlarged crops and catalogue-based explanations. All existing render thumbnails and lightboxes remain. Catalogue cards and product views share native cross-document view-transition names, with standard navigation as a fallback.

Both catalogue routes provide a two- or three-lens comparison with duplicate selection prevention and a differences filter. Missing catalogue parameters are labelled as unspecified. Comparison data is derived on the server; source-photo fields are not passed to the client.

## Generated art

Created with the built-in imagegen tool, using the existing IOL artwork as a shape reference. The approved output was encoded as WebP at quality 92 without resizing (1536 × 1024, 78,618 bytes).

- Website asset: `public/assets/optics/optical-night.webp`
- Full-resolution PNG: `../../outputs/optical-motion/optical-night.png`
- Prompt: `../../outputs/optical-motion/prompt.txt`

## Validation

Run `pnpm exec tsc --noEmit --incremental false` and `pnpm build`. Verify the hero pause, scroll chapters, both interactive galleries, lightbox keyboard dismissal, comparison selection/filter and responsive layout in a browser before deployment.
