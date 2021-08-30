import React from 'react'
import './Post.scss'
import {AiOutlineEye, AiOutlineHeart, AiOutlineComment}  from 'react-icons/ai'

const Post = ({post,PsLikes,PsComments}) => {
    if (post!== undefined) {
        return (
        <div className='PostContainer'>
            <div className='PostImageContainer'>
                <img src={'./images/'+post.image} alt={post.title} className='PostImage' />
            </div>
            <div className='PostInforContainer'>
                <div className='PostNameContainer'><h1 className='PostName'>{post.title}</h1></div>
                <div className='PostAuthorContainer'>By: <span className='PostAuthor'>{post.author}</span></div>
                <div className='PostDateContainer'>Date: <span className='PostDate'>{post.createdAt ? post.createdAt: '14-8-2021'}</span></div>
                <div className='PostIndex'>
                    <div className='PostIndexGroup'><AiOutlineEye className='PostIndexIcon'></AiOutlineEye><span className='PostIndexValue'>{post.views}</span></div>
                    <div className='PostIndexGroup'><AiOutlineHeart className='PostIndexIcon'></AiOutlineHeart><span className='PostIndexValue'>{PsLikes}</span></div>
                    <div className='PostIndexGroup'><AiOutlineComment className='PostIndexIcon'></AiOutlineComment><span className='PostIndexValue'>{PsComments}</span></div>
                </div>
            </div>
        </div>
        )
    }
    else return null;
}

export default Post