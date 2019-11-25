import React from "react"

//重定向
import { Redirect } from "react-router-dom"
function hocLogin(Component){
   return class HocLogin extends React.Component{
       constructor(props){
           super(props)
              this.state={
               isLogin:false
          }   
       }
       render(){
           let { isLogin } = this.state
           return(
               <div>
                   {
              isLogin ? <Component></Component> : <Redirect from="/*" to="/login"></Redirect>
                   }  
               </div>   
           )
       }
   }
}
export default hocLogin 