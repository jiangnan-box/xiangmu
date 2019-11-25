import React from "react"
import "./style.scss"

import { NavLink } from "react-router-dom"
//路由配置文件
import routes from "../../routes/index.js"
//ui组件
import { Menu, Icon} from 'antd'
const { SubMenu } = Menu

export default class Slide extends React.Component{

    render(){
        return(
          <div className="qf_layout_slide">
               <Menu
                    // defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    // inlineCollapsed={this.state.collapsed}
                    >

                    {   //生成menu
                        routes.map((ele,idx)=>{
                            //当有二级导航链接时
                          if(ele.sub && ele.sub.length>0){
                            return(
                                <SubMenu
                                key={ele.id}
                                title={
                                <span>
                                    <Icon type={ele.icon} />
                                    <span>{ele.text}</span>
                                </span>
                                }
                              >
                              {
                                  ele.sub.map((ele2, idx2)=>{
                                      return(
                                       <Menu.Item key={ele2.id}>
                                          <NavLink exact to={ele2.path}><Icon type={ele2.icon} />{ele2.text}</NavLink>
                                       </Menu.Item>
                                      )
                                  })
                              }
                            </SubMenu>
                            )
                          } else { //当没有二级导航链接时
                             return(
                                <Menu.Item key={ele.id}>
                                <NavLink exact to={ele.path}><Icon type={ele.icon} />
                               
                                  <span>{ele.text}</span>
                                </NavLink>
                                </Menu.Item>
                              )
                          }
         
                        })
                    }
                </Menu>
          </div>
        )
    }
}