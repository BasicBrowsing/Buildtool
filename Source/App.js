
import { emptyDir } from 'FileSystem'
import { join } from 'Path'

import generateLocalizations from './Bundling/Translations.js'
import generateManifest from './Manifest/Build.js'
import * as Paths from './Environment/Paths.js'


const { clear } = console;

clear();


await emptyDir(Paths.build);

await generateLocalizations();
await generateManifest();
