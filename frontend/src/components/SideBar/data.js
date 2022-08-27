import {
  FaRegChartBar, FaTh, FaUserAlt
} from 'react-icons/fa'

const MenuItem=[
  {
    path:"/",
    name:"Home",
    icon:<FaTh/>,
    menuInner: [
      {
        path:"/",
        name:"Dashboard",
        icon:<FaTh/>
      },
      {
        path:"/investigate",
        name:"Sample",
        icon:<FaRegChartBar/>
      }
    ]
  },
  {
    path:"/manufacture",
    name:"Manufacture",
    icon:<FaUserAlt/>
  },
  {
    path:"/investigate",
    name:"Investigate",
    icon:<FaRegChartBar/>,
    menuInner: [
      {
        path:"/manufacture",
        name:"New 2",
        icon:<FaUserAlt/>
      },
      {
        path:"/investigate",
        name:"Sample -2",
        icon:<FaRegChartBar/>
      }
    ]
  }
]

export default MenuItem;