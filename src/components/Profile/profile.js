import React from 'react'
import './profile.css';
const Profile = () => {
    return (
        <div classNameName='profile_body'>
             <div className="main-container">
    <div className="profile-content">
      <div className="profile-img">
        <img src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg" />
        <div className="name">
          <h2>Hanibal Girmay</h2>
          <span>@hanibal_g</span><span>Designer</span>
        </div>
      </div>
      <button className="edit">
        <i className="fas fa-edit"></i>
        Edit
      </button>
    </div>

    <hr className="break" />
    <div className="profile_body-content">
      <ul>
        <li><a href="" className="active">Home</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Jobs</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
      </ul>

      <div className="main-title">
        <p>Insight</p>
        <p>May 28- Jun 24</p>
      </div>
      <div className="main">
        <div className="card bg-dark">
          <p>Project Reached</p>
          <p className="num">1212</p>
        </div>
        <div className="card">
          <p>Post Engagements</p>
          <p className="num">422</p>
        </div>
        <div className="card">
          <p>Page Likes</p>
          <p className="num">11</p>
        </div>
      </div>
    </div>
</div>
        </div>
    )
}
export default Profile;