import React from 'react'
import './Sidebar.css'

// Components
import { SidebarOption } from  '../Home'

// Icons
import {
    TwitterIcon, HomeIcon, SearchIcon, NotificationsNoneIcon as NotificationIcon, MailOutLineIcon, BookmarkBorderIcon, ListAltIcon, PermIdentityIcon, MoreHorizIcon
} from '../Home'

import { Button } from '@material-ui/core'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon" />

            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationIcon} text="Notifications" />
            <SidebarOption Icon={MailOutLineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
