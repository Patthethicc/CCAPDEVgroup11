import Popup from 'reactjs-popup';
import "../components/ProfilePage/HeaderOptions.css";
import 'reactjs-popup/dist/index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPencil
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import API from "../url";

export default function EditUser(user_id) {
    const [username, setUsername] = useState("");
    const [usertag, setTag] = useState("");
    const [userbio,setUserbio] = useState("");

    console.log(user_id.user_id)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${API}/user/${user_id.user_id}`, {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            });
    
            if (!response.ok) {
              throw new Error("Failed to fetch project data.");
            }
    
            const userData = await response.json();
            
            setUsername(userData.user_name)
            setTag(userData.user_tag)
            setUserbio(userData.user_bio)
          } catch (error) {
            console.error("Error fetching project data: ", error.message);
          } 
        };
    
        fetchData();
      }, [user_id]);

      const handleEditUser = async () => {
        if (!user_id.user_id || !username.trim() || !usertag.trim() || !userbio.trim()) {
          alert("Title and body cannot be empty.");
          return;
        }
    
        const updatedUser = {
          user_name: username,
          user_tag: usertag,
          user_bio: userbio,
        };
    
        try {
          const response = await fetch(`${API}/user/edit/${user_id.user_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedUser),
          });
    
          if (!response.ok) {
            throw new Error("Error updating user.");
          }
    
          const result = await response.json();
          console.log("User updated successfully:", result);
    
        } catch (err) {
          console.error("Error updating data: " + err.message);
        }
      };

    return (
        <Popup
            trigger={<button className="editProfileBtn">
                        <FontAwesomeIcon icon={faPencil} id="pencilIcon">
                        </FontAwesomeIcon> Edit Profile
                    </button>}
            modal
            nested
            contentStyle={{ background: "transparent", boxShadow: "none", border: "none" }}
        >
            {
            <div className="signup-page">
                <div className="main2">
                    <div className="outerpad">
                        <div className="innerpad">
                            <h2 className="log">Edit Details</h2>
                                <form>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Username"
                                    size="30px"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="@usertag"
                                    size="30px"
                                    value={usertag}
                                    onChange={(e) => setTag(e.target.value)}
                                />
                                <textarea
                                    className="input"
                                    type="text"
                                    placeholder="Your bio here"
                                    value={userbio}
                                    onChange={(e) => setUserbio(e.target.value)}
                                />
                                <button type="submit" className="button-logsign" onClick={handleEditUser}>
                                    Edit
                                </button>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
            }
        </Popup>
    );
}