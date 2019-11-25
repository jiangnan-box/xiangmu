import axios from "axios"

function fetch(api,method,data,callback){
    axios({
        url:"http://localhost:3000"+api,
        method:method,
        data:data
    }).then(res=>{
        // console.log("成功",res.data.data)
         let data = null
       if(res.data.code === 1){
           data = res.data.data
       } 
        callback && callback(data)
    }).catch(err=>{
        console.log("失败了",err)
    }).then(()=>{
        //总会执行
    })
}

//用于获取用户列表
export function getUserList(data,callback) {
    fetch('/db/user.json','GET', data, res=>{
        callback && callback(res)
    })
}

//用于获取订单列表(含分页)
export function getOrderList(data,callback){
     fetch("/db/order.json","GET",data,res=>{
         callback && callback(res)
     })
}

//获取权益卡列表
export function getCardList(data,callback){
    fetch("/db/cards.json","GET",data,res=>{
        callback && callback(res)
    })
}

