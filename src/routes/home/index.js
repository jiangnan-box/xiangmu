import React from 'react'

import { Button } from 'antd'
import { A ,B} from "../../components/index"

class Home extends React.Component {

    render(){
        return(
            <div>
                <h2>首页</h2>
                <Button type="primary">按钮</Button>
                <hr/>
                <A></A>
                <B></B>
            </div>
        )
    }
}
export default  Home