import React from "react"
import { Tabs } from 'antd';
import "./style.scss"
import TabCard from "./TabCard";
const { TabPane } = Tabs;
export default class Card extends React.Component {
    // skipToCreate(){
    //     console.log("card组件",this.props)
    //     this.props.history.push("./card/create")
    // }
    render(){
        return(
            <div className="page_card">
             <Tabs defaultActiveKey="1">
               <TabPane tab="权益卡管理" key="1">

                   <TabCard></TabCard>
               </TabPane>

               <TabPane tab="领卡记录" key="2">
                   Content of Tab Pane 2
               </TabPane>
                <TabPane tab="退卡记录" key="3">
                   Content of Tab Pane 3
                </TabPane>
              </Tabs>
            </div>
        )
    }
}