import React, { useState } from 'react'

import Avatar1 from '../images/avatar1.jpg'
import Avatar2 from '../images//avatar6.jpg'
import Avatar3 from '../images//avatar5.jpg'
import { Link } from 'react-router-dom'

const authorsData = [
  {id: 1, avatar: Avatar1, name: 'Princess Dacuma', posts: 2},
  {id: 2, avatar: Avatar2, name: 'Janelle Kelsy', posts: 1},
  {id: 3, avatar: Avatar3, name: 'Wendy Cabasag', posts: 1}
]

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData)

  return (
    <section className="authors">
      {authors.length > 0 ? <div className="container authors__container">
        {
          authors.map(({id, avatar, name, posts}) => {
            return <Link key={id} to={`/posts/users/${id}`} className='author'>
              <div className="author__avatar">
                <img src={avatar} alt={`Image of ${name}`}/>
              </div>
              <div className="author__info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          })
        }
      </div> : <h2>No Users/Authors Found.</h2>}
    </section>
  )
}

export default Authors