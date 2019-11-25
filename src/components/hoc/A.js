import React from "react"

import hocPlace from "./HocPlace"

class A extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>我是A组件</h1>
            </div>
        )
    }
}
export default hocPlace(A)