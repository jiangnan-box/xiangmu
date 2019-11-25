import React from 'react'
import { BrowserRouter, NavLink, Route, Switch, Redirect} from "react-router-dom"
import routes from "./routes/index.js"
import { Provider } from "mobx-react"
import store from "./store/index.js"
import "./assets/css/common.scss"
import 'antd/dist/antd.css'

export default class App extends React.Component {
  //用于循环生成导航
     createNavLink(arr){
       let linkArr = []
       arr.map((ele,idx)=>{
          linkArr.push(<NavLink key={ele.id} exact to={ele.path}>{ele.text}</NavLink>)
       })
       return linkArr
     }
     //二级路由
     createRoute(arr) {
      let linkArr = []
      arr.map((ele, idx)=>{
        linkArr.push(<Route key={ele.id} exact path={ele.path} component={ele.component}></Route>)
        if (ele.children && ele.children.length > 0) {
          ele.children.map((ele2,idx2)=>{
            linkArr.push(<Route key={ele2.id} exact path={ele2.path} component={ele2.component}></Route>)
          })
        }
      })
      return linkArr
    }
      render(){
        return (
          <BrowserRouter>
           <Provider store={store}>
             <div className="app">
                 <h1>我的app</h1>
             </div>
             {
               this.createNavLink(routes)
             }
             <Switch>
              {
               this.createRoute(routes)
              }
              <Redirect from="/*" to="/home"></Redirect>
             </Switch>
            </Provider>
          </BrowserRouter>
        )
    }
}


