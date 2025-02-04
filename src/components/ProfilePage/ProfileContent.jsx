import Content from "../Home/Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFilter
} from "@fortawesome/free-solid-svg-icons";
import "./ProfileContent.css";

export default function ProfileContent() {
	return (
	  <div className="profileContent">
		<div className="postFilter">
			<button className="filerOption">
				<FontAwesomeIcon icon={faFilter} id="filterIcon"></FontAwesomeIcon>All</button>
		</div>
		<div className="project-list">
		  <Content></Content>
			</div>
		</div>
	);
  }