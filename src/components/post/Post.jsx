import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <img className='postImg'
        src="https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className="postTitle">
          lorem me jiop mussd mndn sit
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Excepturi nulla aliquid vero vel? Dolore quam necessitatibus
        deleniti, voluptatibus maiores minima nemo natus explicabo ab
        a nihil, reprehenderit aliquid, nostrum quasi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Excepturi nulla aliquid vero vel? Dolore quam necessitatibus
        deleniti, voluptatibus maiores minima nemo natus explicabo ab
        a nihil, reprehenderit aliquid, nostrum quasi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Excepturi nulla aliquid vero vel? Dolore quam necessitatibus
        deleniti, voluptatibus maiores minima nemo natus explicabo ab
        a nihil, reprehenderit aliquid, nostrum quasi.
      </p>
    </div>
  )
}

