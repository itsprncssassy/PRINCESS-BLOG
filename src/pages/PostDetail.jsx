import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/avatar3.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
          <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
            
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt=""/>
        </div>
        <p>
          Offering nicely cooked spaghetti carbonara, pizza and beef is the unique characteristic of this cafe. Good frappes are worth trying here. There is a lovely view from Escalera Cafe. The well-trained staff at this place can demonstrate how much they value their clients. The professional service is something these restaurateurs care about. The homey atmosphere offers a comfortable feel to a guests' stay at this spot. This cafe is rated on Google 4.2 by its guests. 
        </p>
        <p>
          Address: Blk 84 A lot 3 Pelican Cliff Eastridge Executive Village, Binangonan, Calabarzon, Philippines
        </p>
        <p>
          Emails us on @escaleracafeofficial
        </p>
      </div>
    </section>
  )
}


export default PostDetail