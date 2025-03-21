import "./HeaderOptions.css";
import EditUser from "../../pages/EditUser"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEllipsisH,
	faCommenting,
	faPlus,
	faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function HeaderOptions(user_id) {
	const current_user = JSON.parse(localStorage.getItem("user"));
	let ownProfile = false

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
				<EditUser user_id={user_id.user_id}/>
			</div>
		);
	}
  }
