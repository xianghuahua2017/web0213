export function get(url){
    var result=fetch(url,{
        mothed:"get"
    })
    return result;
}