
import { fromFileUrl , dirname , join } from 'Path'


const
    folder = dirname(fromFileUrl(import.meta.url)) ,
    project = join(folder,'..','..','..') ;


//  Repositories

export const standardLibrary
    = join(project,'StandardLibrary');

export const translations
    = join(project,'Translations');
    
export const translation
    = join(project,'Translation');
    
export const manifest
    = join(project,'Manifest');

export const assets
    = join(project,'Assets');

export const build
    = join(project,'Build');
    
    
//  Bundle

export const bundle
    = join(build,'Bundle');
    
export const Bundle = {
    
    locale : ( countryCode ) =>
        join(bundle,'_locale',countryCode,'messages.json')
}
    

//  Translations / < Language > / Data / ..

export const translationData = ( language ) =>
    join(translations,language,'Data');
    
    
//  Translation / Data / Descriptions.yml

export const localeDescriptions 
    = join(translation,'Data','Descriptions.yml');

