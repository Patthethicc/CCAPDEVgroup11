import "./HeaderOptions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEllipsisH,
	faCommenting,
	faPlus,
	faCheck,
	faPencil
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function HeaderOptions(user_id) {
	const current_user = JSON.parse(localStorage.getItem("user"));
	let ownProfile = false

	console.log(current_user.userId)
    console.log(user_id.user_id)
	if(user_id.user_id == current_user.userId){
		ownProfile = true
		console.log(ownProfile)
	}

	const [followBtn, setFollowBtn]=useState(false);
	function handleClick(){
		setFollowBtn(followBtn => !followBtn);
	};

	let followBtnCheck = followBtn ? '-follow' : '-following';
	if(!ownProfile){
		return (
			<div className="headerOptions">
				<button><FontAwesomeIcon icon={faEllipsisH} id="elipsisIcon"></FontAwesomeIcon></button>
				<button><FontAwesomeIcon icon={faCommenting} id="message"></FontAwesomeIcon></button>
				<button onClick={handleClick} className={`btn${followBtnCheck}`}>
					<span className="followState"> {followBtn ? (<span><FontAwesomeIcon icon={faPlus} id="plusIcon"></FontAwesomeIcon> Follow</span>) : (<span><FontAwesomeIcon icon={faCheck} id="checkIcon"></FontAwesomeIcon> Following</span>)}</span>
					</button>
				</div>
	);
	}
	else{
		return(
			<div className="headerOptions-edit">
				<button className="editProfileBtn"><FontAwesomeIcon icon={faPencil} id="pencilIcon"></FontAwesomeIcon> Edit Profile</button>
			</div>
		);
	}
  }
