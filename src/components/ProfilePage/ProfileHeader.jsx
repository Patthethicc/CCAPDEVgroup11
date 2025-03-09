import "./ProfileHeader.css";
import HeaderOptions from "./HeaderOptions";

export default function ProfileHeader(user_name, user_tag, user_bio) {
  const headerOptions = HeaderOptions(false);

  return (
    <div className="profileHeader">
      <div className="coverPhoto"></div>
      <div className="info-container">
        <img
          src="https://i.pinimg.com/736x/fb/d6/d2/fbd6d2545b2dbd0328d7c50581519da1.jpg"
          className="profilePic"
        ></img>
        <div className="user-info">
          <div className="userTag">{user_name}</div>
          <div className="userName">{user_tag}</div>
          <div className="bio">{user_bio}</div>
        </div>
        <div className="headerOptions">{headerOptions}</div>
      </div>
    </div>
  );
}
