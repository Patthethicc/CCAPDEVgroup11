import "./ProfileHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEllipsisH,
	faCommenting,
	faPlus,
	faCheck
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function ProfileHeader() {
	
	const [followBtn, setFollowBtn]=useState(false);
	function handleClick(){
		setFollowBtn(followBtn => !followBtn);
	};

	let followBtnCheck = followBtn ? '-follow' : '-following';
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
				<button><FontAwesomeIcon icon={faEllipsisH} id="elipsisIcon"></FontAwesomeIcon></button>
				<button><FontAwesomeIcon icon={faCommenting} id="message"></FontAwesomeIcon></button>
				<button onClick={handleClick} className={`btn${followBtnCheck}`}>
					<span className="followState"> {followBtn ? (<span><FontAwesomeIcon icon={faPlus} id="plusIcon"></FontAwesomeIcon> Follow</span>) : (<span><FontAwesomeIcon icon={faCheck} id="checkIcon"></FontAwesomeIcon> Following</span>)}</span>
					</button>
				</div>
			</div>
		
		</div>
	);
  }
