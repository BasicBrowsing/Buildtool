
const sizes = [ 256 , 128 , 64 , 32 , 16 ];


/**
 *  @brief Generates the `icons` section.
 */

export default function useIcon ( path ){

    const icons = {}

    for ( const size of sizes )
        icons[size] = path;

    return { icons }
}
