# Directory Structure

VuePress follows the principle of **"Convention is better than configuration"**. The recommended structure is as follows:

<!-- textlint-disable terminology -->

::: vue
.
├── docs
│   ├── .vuepress _(**Optional**)_
│   │   ├── `components` _(**Optional**)_
│   │   ├── `theme` _(**Optional**)_
│   │   │   └── Layout.vue
│   │   ├── `public` _(**Optional**)_
│   │   ├── `styles` _(**Optional**)_
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── `templates` _(**Optional, Danger Zone**)_
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── `config.js` _(**Optional**)_
│   │   └── `enhanceApp.js` _(**Optional**)_
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
:::

<!-- textlint-enable -->

::: warning Note
Please note the capitalization of the directory name.
:::

- `docs/.vuepress`: Used to store global configuration, components, static resources, etc.
- `docs/.vuepress/components`: The Vue components in this directory will be automatically registered as global components.
- `docs/.vuepress/theme`: Used to store local theme.
- `docs/.vuepress/styles`: Stores style related files.
- `docs/.vuepress/styles/index.styl`: Automatically applied global style files, generated at the ending of the CSS file, have a higher priority than the default style.
- `docs/.vuepress/styles/palette.styl`: The palette is used to override the default color constants and to set the color constants of Stylus.
- `docs/.vuepress/public`: Static resource directory.
- `docs/.vuepress/templates`: Store HTML template files.
- `docs/.vuepress/templates/dev.html`: HTML template file for development environment.
- `docs/.vuepress/templates/ssr.html`: Vue SSR based HTML template file in the built time.
- `docs/.vuepress/config.js`: Entry file of configuration, can also be `yml` or `toml`.
- `docs/.vuepress/enhanceApp.js`: App level enhancement.

::: warning Note
When customizing `templates/ssr.html`, or `templates/dev.html`, it’s best to edit it on the basis of the [default template files](https://github.com/platonai/pulsarr/blob/1.10.x/packages/%40vuepress/core/lib/client/index.dev.html), otherwise it may cause a build failure.
:::

## Default Page Routing

Here we use the `docs` directory as the `targetDir` (see [Command-line Interface](../api/cli.md#usage)). All the "Relative Paths" below are relative to the `docs` directory. Add `scripts` in `package.json` which is located in your project’s root directory:

```json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

For the above directory structure, the default page routing paths are as follows:

|    Relative Path   |  Page Routing  |
|--------------------|----------------|
| `/README.md`       | `/`            |
| `/guide/README.md` | `/guide/`      |
| `/config.md`       | `/config.html` |

**Also see:**

- [Config](../config/README.md)
- [Theme](../theme/)
- [Default Theme Config](../theme/default-theme-config.md)

