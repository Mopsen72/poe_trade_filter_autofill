import path from 'node:path'
import {crx} from '@crxjs/vite-plugin'
import {defineConfig} from 'vite'
import zip from 'vite-plugin-zip-pack'
import react from '@vitejs/plugin-react'
import manifest from './manifest.config.js'
import {name, version} from './package.json'

export default defineConfig({
    resolve: {
        alias: {
            '@': `${path.resolve(__dirname, 'src')}`,
        },
    },
    plugins: [
        react(),
        crx({manifest}),
        zip({outDir: 'release', outFileName: `${name}-v${version}.zip`}),
    ],
    server: {
        cors: {
            origin: [
                /chrome-extension:\/\//,
            ],
        },
    },
})
