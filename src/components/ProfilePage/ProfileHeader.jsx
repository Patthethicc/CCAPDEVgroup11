import "./ProfileHeader.css";
import HeaderOptions from "./HeaderOptions";


export default function ProfileHeader() {
	const headerOptions = HeaderOptions(true);	

	return (
	  <div className="profileHeader">
		<div className="coverPhoto"></div>
		<div className="info-container">
			<img src="https://i.pinimg.com/736x/fb/d6/d2/fbd6d2545b2dbd0328d7c50581519da1.jpg" className="profilePic"></img>
				<div className="user-info">
					<div className="userHandle">HansPerez</div>
					<div className="userName">@hans_perez</div>
					<div className="bio">2nd Year BSCS-ST at DLSU <br/>dm for Math Tutoring</div>
				</div>
			<div className="headerOptions">
				{headerOptions}
				</div>
			</div>
		
		</div>
	);
  }
