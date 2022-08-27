import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { WidgetContainer, WidgetLeft, WidgetRight } from './styled';

const Widget = ({ type }) => {
  let data;
  switch (type) {
    case 'user':
      data = {
        title: 'Users',
        isMoney: true,
        link: 'Sea All Users',
        icon: <PersonOutlineOutlinedIcon className='icon' style={{color: '#16d9e3', backgroundColor: 'white'}} />,
        percentage: 10,
        amount: 100,
        backgroundImage: 'radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)',
      };
      break;
    case 'order':
      data = {
        title: 'Order',
        isMoney: false,
        link: 'Sea All',
        icon: <ShoppingCartOutlinedIcon  className='icon' style={{color: '#0ba360', backgroundColor: 'white'}} />,
        percentage: 50,
        amount: -30,
        backgroundImage: 'linear-gradient(to top, #0ba360 0%, #3cba92 100%)',
      };
      break;
    case 'earning':
      data = {
        title: 'Earning',
        isMoney: true,
        link: 'View net Earning',
        icon: <MonetizationOnOutlinedIcon className='icon' style={{color: '#2b5876', backgroundColor: 'white'}} />,
        percentage: 20,
        amount: 90,
        backgroundImage: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
      };
      break;
    case 'balance':
      data = {
        title: 'Balance',
        isMoney: false,
        link: 'Sea Details',
        icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{color: '#ff0844', backgroundColor: 'white'}} />,
        percentage: 30,
        amount: -40,
        backgroundImage: 'linear-gradient(to top, #ff0844 0%, #ffb199 100%)',
      };
      break;
    default:
      data = {
        title: 'None',
        isMoney: false,
        link: 'none',
        icon: <PersonOutlineOutlinedIcon className='icon' />,
        percentage: 100,
        amount: -4,
        backgroundImage: 'radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)',
      };
      break;
  }
  return ( 
    <WidgetContainer backgroundImage={data.backgroundImage}>
        <WidgetLeft>
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && '$'} { data.amount }</span>
            <span className="link">{ data.link }</span>
        </WidgetLeft>
        <WidgetRight>
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon />
                {data.percentage}%
            </div>
            {data.icon}
        </WidgetRight>
    </WidgetContainer>
  )
}

export default Widget
