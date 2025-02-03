import "./ProfileHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEllipsisH,
	faCommenting,
	faPlus
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ProfileHeader() {
	const [activeBtn, setActiveBtn] = useState(null);

	const handleClick = (index) => {
		setActiveBtn(index);
	};


	return (
	  <div className="profileHeader">
		<div className="coverPhoto"></div>
		<div className="info-container">
			<div className="picture-border"><img src="https://i.pinimg.com/736x/fb/d6/d2/fbd6d2545b2dbd0328d7c50581519da1.jpg" className="profilePic"></img></div>
				<div className="user-info">
					<div className="userHandle">HansPerez</div>
					<div className="userName">@hans_perez</div>
					<div className="bio">2nd Year BSCS-ST at DLSU <br/>dm for Math Tutoring</div>
				</div>
			<div className="headerOptions">
				<button><FontAwesomeIcon icon={faEllipsisH} id="elipsisIcon"></FontAwesomeIcon></button>
				<button><FontAwesomeIcon icon={faCommenting} id="message"></FontAwesomeIcon></button>
				<button><FontAwesomeIcon icon={faPlus} id="plusIcon"></FontAwesomeIcon> Follow</button>
				</div>
			</div>
		<div className="profileContentButtons">
			<button 
			className={activeBtn === 0 ? 'active' : ''} 
			onClick={() => handleClick(0)}
			>Projects</button> 
			<button 
			className={activeBtn === 1 ? 'active' : ''} 
			onClick={() => handleClick(1)}
			>Comments</button>
			<button
			className={activeBtn === 2 ? 'active' : ''} 
			onClick={() => handleClick(2)}
			>Upvotes</button>
			<button
			className={activeBtn === 3 ? 'active' : ''} 
			onClick={() => handleClick(3)}
			>Downvotes</button>
			</div>
		</div>
	);
  }