# Full Bakker website reference

[`bakker-website/`](bakker-website/) is an exact snapshot of all **348 Git-tracked files** in the public [`liambakk/portfolio` repository](https://github.com/liambakk/portfolio) at commit [`a2b513ba4ea2df6f3f977685df53086868f45cec`](https://github.com/liambakk/portfolio/commit/a2b513ba4ea2df6f3f977685df53086868f45cec). Each copied file was compared byte for byte with that commit.

It includes the complete tracked Next.js app, project pages and content, components, styles, scripts, configuration, `pnpm-lock.yaml`, and all tracked media assets. Git history, ignored dependencies, generated build output, and local environment files are not part of the source snapshot.

## Run the original site

From the repository root:

```sh
cd reference/bakker-website
pnpm install --frozen-lockfile
pnpm dev
```

Open <http://localhost:3000>. The original project's [`README.md`](bakker-website/README.md) and [`package.json`](bakker-website/package.json) remain unchanged.

## Reuse it

This folder is the original site's code and content. Change its name, text, project images, external links and contact details before using it for another person. In particular, the original [`app/api/access-request/route.ts`](bakker-website/app/api/access-request/route.ts) contains the site's live contact recipient and email sender settings; replace them before deploying a copy with a Resend key.

For a lighter starting point focused on the visual style, use the independent [`Bakker design system`](../systems/bakker/) instead.
