# Website design systems

Two standalone, copyable website design references in one repository.

| System | Source reviewed | Visual language | Demo |
| --- | --- | --- | --- |
| Bakker | [Liam Bakker portfolio](https://github.com/liambakk/portfolio), commit `a2b513b` (June 22, 2026) | Dark canvas, white rules, tabbed navigation, editorial project grid, oversized signature type | [`systems/bakker/`](systems/bakker/) |
| Metis (formerly Nomic Labs) | Current Metis website, commit `4bd1a57` (October 21, 2026); [public site](https://metis.inc/) | Warm white canvas, Helvetica, quiet greys, fine frames, centered hero, pixel shaped artwork | [`systems/metis/`](systems/metis/) |

The Nomic website repository was transferred and renamed to the private `metisworld/metis-website` repository. Its current public design is represented here as **Metis**. The two folders above are small, independent design references rather than production applications. The Metis example includes no private source content, forms, analytics, credentials, customer data, third party imagery, or backend code.

## Full Bakker website source

The complete public Bakker website is also included under [`reference/bakker-website/`](reference/bakker-website/), with all 348 files tracked at the reviewed source commit. It contains the real pages, content, components, styles, media and application code. See the [reference guide](reference/README.md) for provenance, local run steps and contact settings to change before deploying a copy. The full source is roughly 295 MB; the smaller design system above is easier to adapt if only the visual style is needed.

See the [design review](DESIGN-REVIEW.md) for a side by side comparison of palette, typography, layout, interaction and mobile behavior.

## View locally

Run from the repository root:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000>. You can also open either system's `index.html` directly from disk. There are no packages to install or build steps.

## Copy a system

Each `systems/<name>/` folder is self contained. Copy its `index.html`, `tokens.css`, `components.css`, and optional `demo.js` into a project. Change the sample text and CSS variables in `tokens.css` first. The HTML is a reference for component structure and responsive behavior; use the CSS classes in your own templates or components.

The examples include keyboard focus states, semantic landmarks, and reduced motion support. The artwork in the Metis example is made entirely with CSS so recipients can replace it with their own imagery.

## License and attribution

The original **design example code** in this repository is available under [MIT](LICENSE). The full Bakker source snapshot keeps its original provenance; this repository's MIT license does not newly license third party content or project imagery in that snapshot. The Bakker and Metis names identify the design sources. Replace the original branding, contact details, copy and images when adapting a design for someone else.
