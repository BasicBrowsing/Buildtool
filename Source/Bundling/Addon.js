
import * as Paths from 'Paths'
import { copy } from 'FileSystem'
import { join } from 'Path'


export default async function copyAll (){
    
    const source = 
        join(Paths.addon,'Source');
    
    await copy(source,Paths.bundle,{ recursive : true });
    
}
