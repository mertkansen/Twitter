import React, { useState, useEffect } from 'react'
import { db } from '../../firebase'

import FlipMove from 'react-flip-move'

import './Feed.css'

import { TweetBox, Post } from '../Home'

const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {

        db.collection('posts')
            .orderBy('date', 'desc')
            .onSnapshot(
                snapshot => setPosts(
                    snapshot.docs.map(
                        doc => ({
                            id: doc.id,
                            data: doc.data()
                        })
                    )
                )
            )
    }, [])

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            <FlipMove>
            {
                posts.map(
                    post => (
                    <Post
                        key={post?.id}
                        id={post?.id}
                        displayName={post?.data.displayName}
                        username={post?.data.username}
                        verified={post?.data.verified}
                        text={post?.data.text}
                        image={post?.data.image}
                        avatar={post?.data.avatar}
                    />
                    )
                )        
            }
            </FlipMove>
        </div>
    )
}

export default Feed
