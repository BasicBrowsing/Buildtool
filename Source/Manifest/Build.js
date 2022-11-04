
import * as Paths from '../Environment/Paths.js'
import { deepMerge } from 'Collections'
import { locale } from './i18n.js'
import useIcons from './Icons.js'


const 
    { writeTextFile } = Deno ,
    { stringify } = JSON ;


let manifest = {
    
    manifest_version : 3 ,
    
    description : locale('Addon Description') ,
    name : locale('Addon Name') ,
    
    default_locale : 'en' ,
    
    developer : {
        name : 'ＬｏｗｅｒＤｉｍｅｎｓｉｏｎｓ' ,
        url : 'https://github.com/BasicBrowsing'
    },
    
    browser_specific_settings : { 
        gecko : { 
            strict_min_version : '106.0' ,
            id : '{201c6412-a277-437d-81db-b4e872330922}' 
        }
    },
    
    content_security_policy : {
        extension_pages : `script-src 'self'; img-src 'self'`
    },
    
    host_permissions : [ 'all_urls' ] ,
    
    incognito : 'spanning' ,
    
    action : {
        default_title : 'BasicBrowsing' ,
        browser_style : true ,
        default_icon : 'Transparent.svg' ,
        default_area : 'tabstrip'
    },
    
    sidebar_action : {
        open_at_install : true ,
        browser_style : true ,
        default_title : 'BasicBrowsing' ,
        default_panel : 'Sidebar.html' ,
        default_icon : 'Transparent.svg'
    },
    
    commands : {
        'open-settings' : {
            description : 'Open the settings menu.' ,
            suggested_key : {
                default : 'Ctrl+Shift+O'
            }
        },
        'toggle-sidebar' : {
            description : 'Toggle the BasicBrowsing sidebar menu.' ,
            suggested_key : {
                default : 'Ctrl+Shift+P'
            }
        },
    },
    
    background : { scripts : [ 'Scripts/Background.js' ] },
    
    content_scripts : [{
        match_about_blank : true ,
        all_frames : true ,
        matches : [ '<all_urls>' ] ,
        run_at : 'document_start' ,
        js : [ 'Scripts/ContentScript.js' ]
    }],
    
    permissions : [
        'contextualIdentities' ,
        'webRequestBlocking' ,
        'webRequest' ,
        'cookies' ,
        'theme' ,
        'tabs'
    ]
}


export default async function generateManifest (){
    
    manifest = deepMerge(
        useIcons('Transparent.svg') ,
        manifest
    )
    
    const data = stringify(manifest,null,4);
    
    await writeTextFile(Paths.Bundle.manifest,data);
}
