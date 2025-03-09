import ProfileHeader from "../components/ProfilePage/ProfileHeader";
import ProfileContent from "../components/ProfilePage/ProfileContent";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../url.js";

export default function ProfilePage() {
	const { userId } = useParams();
	const [user_name, setUserName] = useState("");
	const [user_tag, setTag] = useState("");
	const [user_bio, setBio] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!userId) {
		  console.error("No ID found in URL");
		  setIsLoading(false);
		  return;
		}
	
		const getUser = async () => {
		  try {
			const response = await fetch(`${API}/users/${userId}`, {
			  method: "GET",
			  headers: { "Content-Type": "application/json" },
			});

			console.log("User ID from URL:", userId);
	
			if (!response.ok) {
			  throw new Error("Failed to fetch user data.");
			}
	
			const userData = await response.json();
			setUserName(userData.user_name);
			setTag(userData.user_tag);
			setBio(userData.user_bio);
		  } catch (error) {
			console.error("Error fetching project data: ", error.message);
		  } finally {
			isLoading(false);
		}
		};
	
		getUser();
	  }, [userId]);
	
	return (
	  <div className="profilePage">
		<ProfileHeader
			user_name={user_name}
			user_tag={user_tag}
			user_bio={user_bio}
			/>
		<ProfileContent></ProfileContent>
	  </div>
	);
  }