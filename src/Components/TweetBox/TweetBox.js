import React, { useState } from 'react'
import {db, firebase} from '../../firebase'

import './TweetBox.css'

import { Avatar, Button } from '@material-ui/core'

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState('')
    const [tweetImage, setTweetImage] = useState('')

    const sendTweet = e => {
        e.preventDefault()

        db.collection('posts').add({
            displayName: "Anonymous",
            username: "internet",
            verified: false,
            text: tweetMessage,
            avatar: `https://avatars.dicebear.com/api/human/asd${Math.random()}.svg`,
            image: tweetImage,
            date: firebase.firestore.FieldValue.serverTimestamp()
        })

        setTweetImage("")
        setTweetMessage("")
    }
    
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={`https://avatars.dicebear.com/api/human/asd${Math.random()}.svg`}
                    />
                    <input 
                        value={tweetMessage}
                        onChange={e => setTweetMessage(e.target.value)}
                        placeholder="What's happening?" 
                        type="text"
                    />
                </div>

                <input 
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL" 
                />

                <Button 
                    type="submit" 
                    onClick={sendTweet}
                    className="tweetBox__tweetButton"
                >Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
