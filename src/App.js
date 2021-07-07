import React, { useState } from 'react'
import AppContent from './Components/AppContent'
import { ThemeProvider } from '@material-ui/core'
import theme from './Components/ui/theme'
import { FaUserPlus, FaCalendarPlus, FaCreativeCommonsSamplingPlus, FaMoneyCheckAlt } from 'react-icons/fa'
import { ImLab } from 'react-icons/im'
import { AiOutlineMessage } from 'react-icons/ai'
import { IoMdBed } from 'react-icons/io'
import { IoBandage } from 'react-icons/io5'
import { FiActivity, FiGrid } from 'react-icons/fi'
import { BsGraphUp, BsCalendar, BsClipboardData } from 'react-icons/bs'
import { IoSettings } from 'react-icons/io5'




const App = (props) => {
  const [panelName, setPanelName] = useState("Reception Panel")

  const iconStyle = {
    fontSize: '20px',
    // color: '#660000'
  }

  const linksControls = [
    {
      id: 0,
      name: 'Home',
      icon: <FiGrid {...iconStyle} />
    },
    {
      id: 1,
      name: 'Registration',
      icon: <FaUserPlus {...iconStyle} />,
    },
    {
      id: 2,
      name: 'Checkup',
      icon: <FaCalendarPlus {...iconStyle} />,
    }, {
      id: 3,
      name: 'Emergency',
      icon: <FaCreativeCommonsSamplingPlus {...iconStyle} />,
    }, {
      id: 4,
      name: 'Laboratory',
      icon: <ImLab {...iconStyle} />,
    }, {
      id: 5,
      name: 'Messaging',
      icon: <AiOutlineMessage {...iconStyle} />,
    }, {
      id: 6,
      name: 'OT/Labour Room',
      icon: <FiActivity {...iconStyle} />,
    }, {
      id: 7,
      name: 'Purchase',
      icon: <FaMoneyCheckAlt {...iconStyle} />,
    }, {
      id: 8,
      name: 'Indoor',
      icon: <IoMdBed {...iconStyle} />,
    },
    {
      id: 9,
      name: 'Minor OT',
      icon: <IoBandage {...iconStyle} />,
    },
  ];

  const links = [
    {
      id: '0links',
      name: 'Analytics',
      icon: <BsGraphUp {...iconStyle} />
    },
    {
      id: '1links',
      name: 'Rosters',
      icon: <BsCalendar {...iconStyle} />
    },
    {
      id: '2links',
      name: 'Databases',
      icon: <BsClipboardData {...iconStyle} />
    },
    {
      id: '3links',
      name: 'Settings',
      icon: <IoSettings {...iconStyle} />
    },
  ]

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <AppContent UIPanel={panelName} sideBarControls={linksControls} links={links} />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
