import Comments from "../ViewPost/Comments";
import './ProfileComments.css'
import { useState, useEffect } from "react";

export default function ProfileComments({ userId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
      fetch(`/api/comments/${userId}`)
          .then((response) => response.json())
          .then((data) => setComments(data))
          .catch((error) => console.error("Error fetching comments:", error));
  }, [userId]);
  
  
  
  return (
		<div className="profile-comments">
			<Comments
			profile_url="https://i.pinimg.com/736x/fb/d6/d2/fbd6d2545b2dbd0328d7c50581519da1.jpg"
			userName_time="hans_perez  •   18 hours ago"
			comment="You did so good! Keep it up!"
			/>
		    
			<Comments
          profile_url="https://i.pinimg.com/736x/fb/d6/d2/fbd6d2545b2dbd0328d7c50581519da1.jpg"
          userName_time="hans_perez •   8 hours ago"
          comment="Can't wait to see your finished product!"
        />

        <Comments
          profile_url="https://i.pinimg.com/736x/fb/d6/d2/fbd6d2545b2dbd0328d7c50581519da1.jpg"
          userName_time="hans_perez •   7 hours ago"
          comment="Can't wait to see your finished product! (2)"
        />

        <Comments
          profile_url="https://i.pinimg.com/736x/fb/d6/d2/fbd6d2545b2dbd0328d7c50581519da1.jpg"
          userName_time="hans_perez  •   6 hours ago"
          comment="Work of art!"
        />

        <Comments
          profile_url="https://i.pinimg.com/736x/fb/d6/d2/fbd6d2545b2dbd0328d7c50581519da1.jpg"
          userName_time="hans_perez  •   5 hours ago"
          comment="Always rooting for you works!"
        />
		</div>
	);
  }