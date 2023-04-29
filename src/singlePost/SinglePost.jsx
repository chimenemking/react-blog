import './singlepost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
     <div className="singlePostWrapper">
        <img 
        src="https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1000" 
        alt="" 
        className="singlePostImg" 

        />
        <h1 className="singlePostTitle">
        lorem ipsum amet kingkksjn.
        <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author: <b>Willis</b></span>
            <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Voluptates sit exercitationem ipsam optio maiores labore ut
          blanditiis veritatis inventore magni voluptas officia eligendi,
           reprehenderit quibusdam, ullam vitae dignissimos. Sint, dolores?
           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Voluptates sit exercitationem ipsam optio maiores labore ut
          blanditiis veritatis inventore magni voluptas officia eligendi,
           reprehenderit quibusdam, ullam vitae dignissimos. Sint, dolores?
           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Voluptates sit exercitationem ipsam optio maiores labore ut
          blanditiis veritatis inventore magni voluptas officia eligendi,
           reprehenderit quibusdam, ullam vitae dignissimos. Sint, dolores?
           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Voluptates sit exercitationem ipsam optio maiores labore ut
          blanditiis veritatis inventore magni voluptas officia eligendi,
           reprehenderit quibusdam, ullam vitae dignissimos. Sint, dolores?
           </p>
     </div>
    </div>
  )
}

