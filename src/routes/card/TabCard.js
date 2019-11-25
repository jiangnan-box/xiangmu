import React from "react"
import { Button,Input,Tabs,Table} from 'antd'
import { inject, observer } from "mobx-react"
import  { withRouter } from "react-router"
const { Search } = Input
const { TabPane } = Tabs

@inject("store") @observer
class TabCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tabKey:"0"
    }
  }

  componentDidMount(){
    this.props.store.CardStore.getCardList()
  }
    //权益卡跳转事件
    skipCardCrete(){
         console.log(this.props)
         //调用父组件的props事件
        // this.props.onSkip()
        this.props.history.push("/card/create")
  }
    // 分页查询
     pageChange(e){
       console.log(e.current)
       //用这个方法把页码传过去
        this.props.store.CardStore.getCardListOfPage(e.current)
     }
     //根据状态进行筛选
     statusChange(e){
       console.log(e)
         this.setState({
           tabKey:e
         })
       //用这个方法把状态页码传递过去
       this.props.store.CardStore.getCardListOfStatus(e)
     }
     //根据关键字搜索
     searchChange(e){
       console.log(e)
       this.props.store.CardStore.getCardListOfSearch(e)
     }


    render(){
      //list1用于渲染页码,list2用于渲染页面
      let { list2,list1 } = this.props.store.CardStore

      list2.map((ele,idx)=>{
        let str = ""
        ele.rights.map((ele2,idx2)=>{
          switch(ele2){
            case 1:
            str += "心悦一"
            break;
            case 2:
            str += "心悦二"
            break;
            case 3:
            str += "心悦三"
            break;
            case 4:
            str += "心悦四"
            break;
            default:
          }
          return false
        })
        list2[idx].rights_zh = str
        return false
      })
     

        const columns = [
            {
                title: '权益卡名称',
                dataIndex: 'name',
                key: 'name',
                align:"center"
              },
              {
                title: '领取条件',
                dataIndex: 'condition',
                key: 'condition',
                align:"center",
                render:(text,row,index)=>{
                  let zh = ""
                  switch(row.condition){
                    case 1:
                      zh = "可直接领取"
                      break;
                    case 2:
                      zh = "需付费购买"
                      break;
                    case 3:
                      zh = "满足指定条件"
                      break;
                      default:
                  }
                  return(<span>{zh}</span>)
                }
              },
              {
                title: '有效期',
                dataIndex: 'period',
                key: 'period',
                align:"center",
                render:(text,row,index)=>{
                  let zh = ""
                  switch(row.period){
                    case 1:
                      zh = "永久有效"
                      break;
                    case 2:
                      zh = "领卡时起"
                      break;
                      default:zh = row.period
                  }
                  return(<span>{zh}</span>)
                }
              },
              {
                title: '权益',
                dataIndex: 'rights_zh',
                key: 'rights_zh',
                align:"center",
              },
            {
              title: '操作',
              key: 'operation',
              fixed: 'right',
              width: 180,
              align:"center",
              render: () => {
                  return(
                     <div className="pct_row_actions">
                        <span>查看成员</span>
                        <span>发卡</span>
                        <span>编辑</span>
                     </div>
                  )
              }
            }
          ]

    
        return(
            <div className="page_card_tab">
                 <div>
                  <Button onClick={this.skipCardCrete.bind(this)} type="primary">新建权益卡</Button>
                  <Search
                      placeholder="请输入权益卡名称"
                      onSearch={this.searchChange.bind(this)}
                      style={{ width: 200,float:"right"}}
                        />
                 </div>
                 <div className="page_card_tab_0ption">
                     <Tabs type="card" activeKey={this.state.tabKey} onChange={this.statusChange.bind(this)}>
                       <TabPane tab="使用中" key="1">
                       </TabPane>
                       <TabPane tab="已禁用" key="2">
                       </TabPane>
                       <TabPane tab="已过期" key="3">
                       </TabPane>
                     </Tabs>
                 </div>
                 <div>
                   <Table 
                      onChange={this.pageChange.bind(this)}
                      rowKey="id"
                      columns={columns} 
                      dataSource={list2} 
                      scroll={{ x: 1000 }} 
                      pagination={{pageSize:2,total:list1.length}}
                      />
                 </div>
                 
            </div>
        )
    }
}
export default withRouter(TabCard)