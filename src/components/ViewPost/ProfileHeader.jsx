import "./ProfileHeader.css";
import API from "../../url.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProfileHeader({author_id}) {
  const [user, setUser] = useState();
  let userTagWithAt
  console.log(author_id)
  const getUser = async function () {
    try {
      const response = await fetch(`${API}/user/${author_id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Error getting user.");
      }

      const result = await response.json();

      setUser(result);
    } catch (err) {
      console.error("Error getting data: " + err.message);
    }
  }

  useEffect(() => {
    getUser();
  
    // Fetch data every 5 minutes (300,000 ms)
    const interval = setInterval(() => {
      getUser();
    }, 300000);
  
    return () => clearInterval(interval);
  }, [author_id]);

  userTagWithAt =  user ? ` ${String(user.user_name)} | @${String(user.user_tag)}` : "@unknownuser";

  return (
    <>
      <div className="post-profile-container">
        <Link to={`/user/${author_id}`}>
          <img
            id="post-container-image"
            src="https://i.pinimg.com/736x/63/d4/2b/63d42bcfc3ce97414d78f14ae76f61c8.jpg"
            alt="Profile Picture"
          />
        </Link>
         <Link to={`/user/${author_id}`}>
          <span id="post-user-hours">{userTagWithAt}</span>
         </Link>
      </div>
    </>
  );
}