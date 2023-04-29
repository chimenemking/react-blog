import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Accont</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=1000"
                            alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id='fileInput' style={{ display: 'none' }} />
                        </div>
                        <label>Username</label>
                        <input type="text" placeholder='Murphy' />
                        <label>Email</label>
                        <input type="email" placeholder='chitherealwillis@gmail.com' />
                        <label>Password</label>
                        <input type="password" />
                        <button className="settingsSubmit">Update</button>
                   
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

