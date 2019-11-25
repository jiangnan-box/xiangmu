import React from "react"
import hocPlace from "./HocPlace"

@hocPlace
 class B extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>我是B组件</h1>
            </div>
        )
    }
}
export default B
