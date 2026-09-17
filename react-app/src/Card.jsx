import profilePic from './assets/profile-img.jpg'
function Card(){
 return(
    <div className="card">
        <img src={profilePic} className='card-image' alt="profile picture"></img>
        <h2 className='card-title'>Jane Doe</h2>
        <p className='card-text'>I am software engineer</p>

    </div>
 )
}

export default Card