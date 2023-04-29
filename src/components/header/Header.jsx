import './header.css'

export default function Header() {
  return (
    <div className='header'>
       <div className="headerTitles">
       <span className='headerTitleSm'>Hays & Buck </span>
       <span className='headerTitleLg'>Blog</span>
       </div>
       <img className='headerImg'
        src="https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
  )
}
