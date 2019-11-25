import { observable,action } from "mobx"
import { getCardList } from "../utils/api"

 class CardStore {
     //全局所有数据
     @observable list = []
      //用于增删改查逻辑的数据
     @observable list1 = []
       //用于页面显示
     @observable list2 = []
     //备份数据，用于显示增加的数据
     @observable list3 = []


     //调接口的方法
     @action getCardList(){
         getCardList({page:1,size:2},res=>{
             console.log("权益卡",res)
             this.list = [...this.list3,...res]
             this.list1 = [...this.list3,...res]
             //初始化备份数据
             //请求接口成功初始化默认显示第一页的数据
               this.updateList2(1)
         })   
     }
    @action updateList2(page){
       this.list2 = this.list1.slice((page-1)*2,page*2)   
    }
        //用于接收传递过来的页码(payload),修改list2
     @action getCardListOfPage(payload){
         const page = payload
        this.updateList2(page)
     }
    //  用来改变被监听的全局数据
     @action getCardListOfStatus(payload){
        const status = payload
        //filter过滤
        const res = this.list.filter(ele=>{
          return  ele.status === status
        })
        this.list1 = res
        this.updateList2(1)
     }
     //搜索
     @action getCardListOfSearch(payload){
         const searchText = payload.trim()
         let res = this.list.filter(ele=>{
           return  ele.name.indexOf(searchText) !== -1
         })
         this.list1 = res
         this.updateList2(1)
     }
     //提交数据
     @action add(payload){
        const card = payload
        card.id = Date.now()
        card.status = 1
        console.log("===",card)
        this.list3.unshift(card)
     }

 }
 export default CardStore