
import * as Paths from 'Paths'
import { copy } from 'FileSystem'
import { join } from 'Path'

export default async function copyAll (){
    
    const source = 
        join(Paths.assets,'Addon');
    
    await copy(source,Paths.Bundle.assets,{ recursive : true });
    
}
