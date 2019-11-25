import { observable,action } from "mobx"
import { getUserList, getOrderList } from "../utils/api.js"

class Store {
   @observable msg = "hello 1912"
   @observable page = 1
   @action updateMsg(){
       this.msg = "hello world"
       getUserList({},res=>{
           console.log("mobx user",res)
       })
       getOrderList({page:this.page},res=>{
            console.log("订单列表",res)
       })
    }
}
export default new Store()