import React from "react"
import "./style.scss"
import Slide from "./Slide.js" //左侧组件
import Header from "./Header.js" //头部组件
import Content from "./Content.js" //中心内容区组件

//用高阶组件（函数）来实现登录拦截
import hocLogin from "../hoc/HocLogin"

@hocLogin
class QfLayout extends React.Component{
    render(){
        return(
            <div className="qf_layout">
            
                <div className="aside">
                  <Slide></Slide>
                </div>
                <div className="header">
                   <Header></Header>
                </div>
                <div className="content">
                   <div className="content_wrap">
                      <Content></Content>
                   </div>
                </div>

            </div>
        )
    }
}
export default  QfLayout