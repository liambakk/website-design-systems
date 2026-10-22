# Website design systems

Two standalone, copyable website design references in one repository.

| System | Source reviewed | Visual language | Demo |
| --- | --- | --- | --- |
| Bakker | [Liam Bakker portfolio](https://github.com/liambakk/portfolio), commit `a2b513b` (June 22, 2026) | Dark canvas, white rules, tabbed navigation, editorial project grid, oversized signature type | [`systems/bakker/`](systems/bakker/) |
| Metis (formerly Nomic Labs) | Current Metis website, commit `4bd1a57` (October 21, 2026); [public site](https://metis.inc/) | Warm white canvas, Helvetica, quiet greys, fine frames, centered hero, pixel shaped artwork | [`systems/metis/`](systems/metis/) |

The Nomic website repository was transferred and renamed to the private `metisworld/metis-website` repository. Its current public design is represented here as **Metis**. This is a small design reference built from those sites, not a copy of either production application. It includes no source content, forms, analytics, credentials, customer data, third party imagery, or backend code from the private repository.

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

The original example code in this repository is available under [MIT](LICENSE). The Bakker and Metis names identify the design sources; this license does not grant rights to their names, logos, original site copy, or images. Replace the sample branding and content when adapting a design.
