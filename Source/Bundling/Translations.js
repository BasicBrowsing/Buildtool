
import * as Paths from '../Environment/Paths.js'
import Languages from './Languages.js'

import { ensureFile } from 'FileSystem'
import { parse } from 'YAML'
import { join } from 'Path'

    
const 
    { writeTextFile , readTextFile } = Deno ,
    { stringify } = JSON ,
    { log } = console ;


const index = parse(await readTextFile(Paths.localeDescriptions));


export default async function generateLocalizations (){
    
    log('\n>> Generating Locations Files\n')
    
    for(const language in Languages)
        await localize(language);
}
    

async function localize ( language ){
    
    let localizations = {} ,
        hasInfo = false ;
    
    for ( const file in index ){
        
        let data = await readTextFile(join(Paths.translationData(language),`${ file }.yml`))
            .catch(() => console.warn(`- ${ language } does not have any content.`));;
        
        if(!data)
            break;
        
        log(`+ ${ language }`);
            
        hasInfo = true;
        
        let translations = parse(data);
        
        for ( const { Name , Type } of index[file] ){
            
            const id = `${ file }_${ Name }`;
            
            localizations[id] = {
                message : translations[Name] ,
                description : Type
            }
        }
    }
    
    if(!hasInfo)
        return
    
    const 
        countryCode = Languages[language] ,
        container = Paths.Bundle.locale(countryCode) ;
    
    await ensureFile(container);
    
    const data = 
        stringify(localizations,null,4);
    
    await writeTextFile(container,data);
}