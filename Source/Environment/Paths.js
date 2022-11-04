
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

export const addon
    = join(project,'Addon');

export const build
    = join(project,'Build');
    
    
//  Bundle

export const bundle
    = join(build,'Bundle');
    
export const Bundle = {
    
    standardLibrary : join(bundle,'STL') ,
    
    manifest : join(bundle,'manifest.json') ,
    
    assets : join(bundle,'Assets') ,
    
    style : join(bundle,'Style') ,

    pages : join(bundle,'Pages') ,
    
    locale : ( countryCode ) =>
        join(bundle,'_locales',countryCode,'messages.json')
    
}
    

//  Translations / < Language > / Data / ..

export const translationData = ( language ) =>
    join(translations,language,'Data');
    
    
//  Translation / Data / Descriptions.yml

export const localeDescriptions 
    = join(translation,'Data','Descriptions.yml');
