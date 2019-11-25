import Home from './home'
import Card from './card/Card.js'
import CardCreate from "./card_create/CardCreate.js"
const routes = [
  {
    id:1,
    path:"/",
    text:"概况",
    component:Home,
    icon:"ie",
  },
  {
    id:2,
    path:null,
    text:"客户管理",
    component:null,
    icon:"apple",
    sub:[
      {
        id:201,
        path:"/card",
        text:"权益卡",
        component:Card,
        icon:"ie",
        children:[
          {
            id:20101,
            path:"/card/create",
            text:"新建权益卡",
            component:CardCreate,
          }
        ]
      },
    ]
  }
]

export default routes