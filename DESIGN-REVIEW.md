# Design review

Reviewed October 22, 2026 from the source repositories and public homepages.

| Element | Bakker portfolio | Metis, formerly Nomic Labs |
| --- | --- | --- |
| Main tone | High contrast, dark editorial portfolio | Calm, light company site |
| Base palette | `#1a1a1a`, white, muted `#888888` | `#fafafa`, `#242220`, warm greys, `#e2e0de` rules |
| Typography | Inter or sans serif; very large signature and section names | Helvetica or Arial; regular weight headings, tight tracking |
| Layout | Viewport based grid, header and content rules, project list beside preview | Wide canvas, centered hero, bounded section frame, generous vertical rhythm |
| Interaction | Inverted tabs and project rows, changing project preview | Small dark button, understated hover, anchor navigation |
| Artwork | Portfolio project imagery | Pixel shaped, tonal scene windows around the hero |
| Mobile approach | Stack preview, list and reference links | Reposition and shrink portal art; stack content and cards |

The two systems should stay independent. Shared CSS would blur their typography and spacing rules. Each folder therefore contains its own token file, component styles and demo page.

The Bakker example keeps the structure and interaction but replaces portfolio names and project images with sample material. The Metis example keeps the visual grammar but uses new CSS generated artwork and generic copy. It does not package the private production app, business claims, forms or data.

Source snapshots reviewed: [`liambakk/portfolio`](https://github.com/liambakk/portfolio) at `a2b513b`; private `metisworld/metis-website` at `4bd1a57`. Public views: [Bakker](https://bakker-website.vercel.app/) and [Metis](https://metis.inc/).
