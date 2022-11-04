

export function locale ( name ){
    return `__MSG_${ name.replaceAll(' ','_') }__`
}