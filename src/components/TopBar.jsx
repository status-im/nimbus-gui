import RedDot from '/top-bar-icons/red.png'
import YelloDot from '/top-bar-icons/yellow.png'
import BlueDot from '/top-bar-icons/blue.png'
import Arrow from '/top-bar-icons/chevron-left.png'
import CommunitiesIcon from '/top-bar-icons/communities.png'
import MessagesIcon from '/top-bar-icons/messages.png'
import WalletIcon from '/top-bar-icons/wallet.png'
import BrowserIcon from '/top-bar-icons/browser.png'
import NodesIcon from '/top-bar-icons/nodes.png'
import Rarible from '/top-bar-icons/Rarible.png'
import User from '/top-bar-icons/user.png'
import FullScreen from '/top-bar-icons/full-screen.png'
import Bell from '/top-bar-icons/bell.png'

import './TopBar.css'
import { ReactButton } from './ReactButton'
import { XStack } from 'tamagui'
import { Icon } from './Icon'
import { Tab } from './Tab'

const TopBar = () => {
  const bgIconBtn = {
    border: 'none',
    'background-color': '#1d2738',
    cursor: 'pointer',
    padding: '8px',
    'border-radius': '5px',
    display: 'flex',
    'align-items': 'center',
  }
  return (
    <XStack className="topbar">
      <XStack className="topbar_left">
        <div className="topbar_actions">
          <Icon src={RedDot} alt=" " className="icon_btn" />
          <Icon src={YelloDot} className="icon_btn"></Icon>
          <Icon className="icon_btn" src={BlueDot}></Icon>
        </div>
        <Icon src={Arrow} width={32} height={32} style={bgIconBtn}></Icon>
        <Icon src={CommunitiesIcon} width={20} height={20} style={bgIconBtn}></Icon>

        <Icon src={MessagesIcon} width={20} height={20} style={bgIconBtn}></Icon>

        <Icon src={WalletIcon} width={20} height={20} style={bgIconBtn}></Icon>
        <Icon src={BrowserIcon} width={20} height={20} style={bgIconBtn}></Icon>
        <Icon src={NodesIcon} width={20} height={20} style={bgIconBtn}></Icon>
      </XStack>
      <div className="topbar_middle">
        {Array.from({ length: 9 }).map((e, i) => (
          <Tab key={i} icon={Rarible} text={'Rarible'} />
        ))}
      </div>
      <div className="topbar_right">
        <ReactButton
          style={{
            border: '1px solid #1d2738',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            padding: '10px',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            color: '#fff',
            fontWeight: 'bold',
          }}
        >
          <p>Jump to </p>
        </ReactButton>
        <button className="icon_btn">
          <img src={FullScreen} alt=" " width="100%" />
        </button>
        <button className="icon_btn">
          <div className="badge_top" />

          <img src={Bell} alt=" " />
        </button>
        <button className="icon_btn">
          <div className="badge_bottom" />

          <img src={User} alt=" " />
        </button>
      </div>
    </XStack>
  )
}

export default TopBar
