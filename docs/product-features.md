# Product features

Every product now has a concise feature panel and catalogue badges derived from `lib/products.json`. Lens pages include a family switch and a comparison link that preselects that model and its partner. Comparison query parameters accept two or three distinct, known lens slugs; invalid values fall back to the normal selection.

The seven lens galleries now have three interactive details each, in addition to the existing equipment and surgery details. Each detail describes a catalogue property and shows a crop of the existing generated render. Product images remain labelled as visualizations; the original-photo controls remain removed.

The primary enquiry link is directly below the product introduction. Feature metrics align in three columns, while materials and surgical components use labelled rows. Mobile layouts wrap long labels and keep the images and hotspots within the page width.

Validation: TypeScript check, focused Oxlint check and production build; all 17 routes and 60 referenced assets return 200, unknown routes return 404. Browser checks cover mobile layouts at 360 px, desktop catalogue cards, lens hotspot activation by pointer and keyboard, image-dialog opening and Escape, family navigation and comparison preselection. HTTP checks cover all 11 feature panels, 27 detail buttons, retained renders and malformed comparison parameters.
