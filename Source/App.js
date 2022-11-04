
import { emptyDir } from 'FileSystem'
import { join } from 'Path'

import generateLocalizations from './Bundling/Translations.js'
import generateManifest from './Manifest/Build.js'
import integrateAssets from './Bundling/Assets/All.js'
import integrateAddon from './Bundling/Addon.js'
import integrateStl from './Bundling/Scripts/StandardLibrary.js'
import * as Paths from './Environment/Paths.js'


const { clear } = console;

clear();


await emptyDir(Paths.build);

await integrateAddon();
await generateLocalizations();
await generateManifest();
await integrateStl();
await integrateAssets();
