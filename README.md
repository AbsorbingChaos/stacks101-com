# Stacks 101: The go-to for STX knowledge

## Run Locally

1. Install Hugo
   - Linux: `sudo snap install hugo`
   - [more options](https://gohugo.io/getting-started/quick-start/#step-1-install-hugo)
2. Download this repository
3. Run `hugo server`
4. View at `localhost:1313`

Content is [stored in /content](./content) as a Hugo page bundle.

- The langing page format is `_index.md` with YAML front matter
- Additional resources, such as images, can be stored in the same folder
- Markdown shortcodes are [available in /layouts/shortcodes](./layouts/shortcodes)

The menu is controlled by the [base configuration (config.toml)](./config.toml) in the root directory.

- Menu items are specified individually rather than created automatically
- Nesting (sub-menus) are supported and connected via a `parent` field
- More information on formatting and capabilities can be found in the [Hugo docs](https://gohugo.io/content-management/menus/#add-non-content-entries-to-a-menu)

## Access Online

Pushes to the `develop` branch:

- https://stacks101-com.chaos.workers.dev

Pushes to the `main` branch:

- https://stacks101.com
