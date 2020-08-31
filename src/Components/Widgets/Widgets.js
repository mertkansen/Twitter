import React from 'react'
import './Widgets.css'

import { SearchIcon } from '../Home'

import {
    TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed
} from 'react-twitter-embed'

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input type="text" placeholder="Search Twitter" />
            </div>

            <div className="widgets__widgetsContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1297776149943255040"} />

                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="NewYorker"
                    options={{height: 400}}
                />

                <TwitterShareButton 
                    options={{
                        text: "This page is awesome",
                        via: "mertkansen"
                    }}
                />
            </div>
        </div>
    )
}

export default Widgets
