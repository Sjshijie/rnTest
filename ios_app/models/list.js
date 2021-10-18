import { API } from '../utils/config'
import HTTP from '../utils/http'

export default class ListModel extends HTTP{
    getCourseFields(){
        return new Promise((resolve,reject)=>{
            this.fetchGet({
                url:API.getCourseFields,
                success(data){
                    resolve(data)
                },
                error(err){
                    reject(err)
                }
            })
        })
    }
    getCourse(field){
        return new Promise((resolve,reject)=>{
            this.fetchGet({
                url:API.getCourse+field,
                success(data){
                    resolve(data)
                },
                error(err){
                    reject(err)
                }
            })
        })
    }
}