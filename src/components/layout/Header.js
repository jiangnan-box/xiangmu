import React from "react"
import "./style.scss"
import { Breadcrumb } from 'antd'
import { withRouter } from "react-router"
import { Link } from "react-router-dom"
import router from "../../utils/router.js"
console.log("...",router)
 class Header extends React.Component{
     createBreadcrumb(){
        let breadArr = [] //面包屑jsx对象

       let path = this.props.location.pathname
       let arr = path.split("/").filter(ele=>ele)
       console.log(arr)
        
       arr.map((ele,idx)=>{
        let url = "/"+arr.slice(0, idx+1).join('/')
         console.log(url)
         let text = ""
         router.map((ele,idx)=>{
             if(ele.path === url ){
                 text = ele.text
             }
             return false
         })
        breadArr.push(
            <Breadcrumb.Item key={url}>
            <Link to={url}>{text}</Link>
          </Breadcrumb.Item>
        )
        return false
       })
       return breadArr
     }
    render(){
       this.createBreadcrumb()
        return(
            <div className="qf_layout_header">
                 <Breadcrumb>
                  {
                      this.createBreadcrumb()
                  }
                  </Breadcrumb>
            </div>
        )
    }
}
const HeaderWithRouter = withRouter(Header)
export default HeaderWithRouter