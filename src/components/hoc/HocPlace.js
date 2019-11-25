import React from "react"

//入参是组件，返回值也是组件
function hocPlace(Component){
    return class hocPlace extends React.Component{
        render(){
            const newProps={
                name:"1912",
                onSkip(){
                    console.log("011")
                }
            }
            return(
                <div>
                    <h1>高阶组件</h1>
                    <Component {...newProps}></Component>
                </div>
            )
        }
    }
}

export default  hocPlace