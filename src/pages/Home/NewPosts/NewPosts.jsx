import React,{useState}  from 'react'
import Post from '../../../components/Post/Post'
import './NewPosts.scss'
import{MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

import { useDispatch, useSelector } from 'react-redux'
import * as postsActions from '../../../redux/actions/posts.actions'

import { postsState$ } from '../../../redux/selectors' 

const NewPosts = () => {
    const [hover, setHover] = useState(false);
    const onHover = () =>{
        setHover(!hover);
    }
    const dispatch = useDispatch();
    const posts = useSelector(postsState$);
    const Num=[1,2,3];    
    React.useEffect(() => {
        dispatch(postsActions.getPosts.getPostsRequest());
    },[dispatch]);
    return (
        <div className='NewPosts'>
            <div className='NewPostsContainer'>
                <div className="SectionTitleContainer"><h1 className='SectionTitle'>News Posts</h1></div>
                <div className='PostsSectionContainer'>
                    <div className='PostsGroup'>
                        {    
                            Num.map(i =><Post post={posts[-1+i]} PsLikes='50' PsComments='12'/>)
                        }  
                    </div>
                    <div className='PostsGroup'>
                        {    
                            Num.map(i =><Post post={posts[+2+i]} PsLikes='50' PsComments='12'/>)
                        }  
                    </div>
                </div>
                <div className='ViewmoreBtnContainer'>
                    <div className='ViewmoreBtn'onMouseEnter={onHover} onMouseLeave={onHover}>
                        View More{ hover ? <MdArrowForward className='ViewmoreBtnIcon'/>:<MdKeyboardArrowRight className='ViewmoreBtnIcon'/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPosts
