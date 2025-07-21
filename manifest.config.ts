import {defineManifest} from '@crxjs/vite-plugin'
import pkg from './package.json'

export default defineManifest({
    manifest_version: 3,
    name: pkg.name,
    version: pkg.version,
    description: "Вставка предметов (ctrl+c ctrl+v) из POE 2 для автозаполнения фильтров",
    icons: {
        48: 'public/logo.png',
    },
    action: {
        default_icon: {
            48: 'public/logo.png',
        },
        default_popup: 'src/popup/index.html'
    },
    content_scripts: [{
        js: ['src/content/main.tsx'],
        matches: ['*://*.pathofexile.com/trade*'],
    }],
})
