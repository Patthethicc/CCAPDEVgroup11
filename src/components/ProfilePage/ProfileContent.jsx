import Content from "../Home/Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFilter
} from "@fortawesome/free-solid-svg-icons";
import "./ProfileContent.css";
import { useState } from "react";

export default function ProfileContent() {
	const [activeBtn, setActiveBtn] = useState(0);

	const handleClick = (index) => {
		setActiveBtn(index);
	};
	
	return (
	  <div className="profileContent">
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
		<div className="profileContentProper">
		<div className="postFilter">
			<button className="filerOption">
				<FontAwesomeIcon icon={faFilter} id="filterIcon"></FontAwesomeIcon>All</button>
		</div>
		<div className="project-list">
		  <Content></Content>
			</div>
		</div>
		</div>
	);
  }