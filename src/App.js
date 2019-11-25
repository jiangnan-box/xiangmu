import React from 'react'
//路由
import { HashRouter,Route} from "react-router-dom"
// import routes from "./routes/index.js"
//状态管理
import { Provider } from "mobx-react"
import store from "./store/index.js"
//ui组件
import "./assets/css/common.scss"
import 'antd/dist/antd.css'
//自己封装的布局组件
import { QfLayout } from "./components/index.js"
import Login from "./routes/login/Login.js"

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
       isLogin:true
    }
  }
      render(){
        // let { isLogin } = this.state
        return (
          <HashRouter>
           <Provider store={store}>
             <div className="app">
                {/* {
                  isLogin ? <QfLayout></QfLayout> : <Login></Login>
                } */}
                <QfLayout></QfLayout>
                <Route exact path='/login' component={Login} />
             </div>
            </Provider>
          </HashRouter>
        )
    }
}


