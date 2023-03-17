import { Menu } from 'antd';
import './sidebar.css';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className='dash'>
        <button className='dashBtn' onClick={''}>Dashboard</button>
        <div className='sidebarMenu'>
          <Menu className='menu' items={[
            {
              label: "Raw Materials",
              icon: <StoreMallDirectoryOutlinedIcon />,
              key: '/rawmaterials'
            },
            {
              label: "Stocks",
              icon:<Inventory2OutlinedIcon />,
              key: '/stocks'
            },
            {
              label: "Customer",
              icon:<GroupOutlinedIcon />,
              key: '/customer'
            },
            {
              label: "Billing",
              icon:<ReceiptLongOutlinedIcon />,
              key: '/billing'
            },
            {
              label: "Reports",
              icon:<AssessmentOutlinedIcon />,
              key: '/reports'
            },
            {
              label: "Expenses",
              icon:<FactCheckOutlinedIcon />,
              key: '/expenses'
            },
            {
              label: "Vendors",
              icon:<Person2OutlinedIcon />,
              key: '/vendors'
            }
          ]
          }>

          </Menu>
        </div>

      </div>
    </div>
  );
}