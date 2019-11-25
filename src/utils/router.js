import routes from "../routes/index.js" 

let router = []
function routesToArray(routes){
     //数组合并
    router = [...router,...routes]
    routes.map((ele,idx)=>{
        if(ele.children && ele.children.length>0){
            //递归
            routesToArray(ele.children)
        }
        if(ele.sub && ele.sub.length>0){
            //递归
            routesToArray(ele.sub)
        }
        return false
    })
}
routesToArray(routes)
export default router