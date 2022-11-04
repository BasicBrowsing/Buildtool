
import * as Paths from 'Paths'
import { copy } from 'FileSystem'
import { join } from 'Path'


export default async function integrate (){
    
    const source = 
        join(Paths.standardLibrary,'Source');
    
    await copy(source,Paths.Bundle.standardLibrary,{ recursive : true });
    
}
