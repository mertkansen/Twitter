import React, { forwardRef } from 'react'
import './Post.css'

import { Avatar } from '@material-ui/core'

import {
    VerifiedUserIcon, ChatBubbleOutlineIcon, RepeatIcon, FavoriteBorderIcon, PublishIcon, DeleteIcon
} from '../Home'

import {db} from '../../firebase'

const Post = forwardRef(({
    id, displayName, username, verified, text, image, avatar
}, ref) => {

    const deleteFromDB = e => {
        db.collection('posts').doc(id).delete()
    }

    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar} 
                />
            </div>

            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{" "}<span className="post__headerSpecial">
                                {verified && <VerifiedUserIcon className="post__badge" />}
                                @{username}
                            </span>
                             
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img
                    className='post__image'
                    src={image} 
                    alt="" 
                />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <DeleteIcon onClick={deleteFromDB} fontSize="small"/>
                </div>
            </div>
        </div>
    )
})

export default Post
