# Bakker design system

An editorial portfolio reference based on the public [Bakker website](https://bakker-website.vercel.app/) and its [source repository](https://github.com/liambakk/portfolio) at `a2b513b`.

## Design decisions

- A near black canvas (`#1a1a1a`) with white type and one pixel white rules.
- A framed top navigation and a second rule for the page title.
- One spacious preview column beside a stacked project list and narrow links column.
- Oversized, cropped signature type at the bottom of the composition.
- An inverted selected tab and project row interaction.

Edit colors, scale, spacing, and motion in [`tokens.css`](tokens.css). Reuse the frame, tabs, list, and preview styles from [`components.css`](components.css). [`demo.js`](demo.js) powers the accessible tabs and sample preview; remove it if you only need static components. The demo uses generic sample content and no original portfolio images.
