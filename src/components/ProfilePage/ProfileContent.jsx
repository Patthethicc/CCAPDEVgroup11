import "./ProfileContent.css";
import { useState } from "react";
import ProfilePostContent from "./ProfilePostContent";
import ProfileComments from "./ProfileComments";
import FilterButton from "./FilterButton";

export default function ProfileContent({userData}) {

	const [activeBtn, setActiveBtn] = useState(0);

	const handleClick = (index) => {
		setActiveBtn(index);
	};

	return (
		<div className="profileContent">
			<div className="profileContentButtons">
				<button
					className={activeBtn === 0 ? "active" : ""}
					onClick={() => handleClick(0)}
				>
					Projects
				</button>
				<button
					className={activeBtn === 1 ? "active" : ""}
					onClick={() => handleClick(1)}
				>
					Comments
				</button>
				<button
					className={activeBtn === 2 ? "active" : ""}
					onClick={() => handleClick(2)}
				>
					Upvotes
				</button>
				<button
					className={activeBtn === 3 ? "active" : ""}
					onClick={() => handleClick(3)}
				>
					Downvotes
				</button>
			</div>

		<div className="profileContentProper">
		<div className="postFilter">
		</div> 
		<FilterButton></FilterButton>
		<div className="project-list">
		  {activeBtn === 1 ? <ProfileComments userData={userData}/> : <ProfilePostContent/>}
			</div>
		
		</div>
		</div>
	);
}
