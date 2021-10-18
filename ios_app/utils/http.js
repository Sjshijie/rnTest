export default class HTTP {
    fetchGet(options){
        return fetch(options.url).then((res)=>res.json()).then(resJson=>{
            options.success(resJson)
        }).catch(err=>{
            console.log(options,err)
            options.error(err)
        })
    }
}