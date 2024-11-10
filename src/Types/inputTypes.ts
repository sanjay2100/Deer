export interface SelectType{
    name:string,
    displayName:string,
    value:string,
    list:string[],
    handleChange:(name:string,value:string)=>void,
    selectable:string
}