import ProfileHeader from "../components/ProfilePage/ProfileHeader";
import ProfileContent from "../components/ProfilePage/ProfileContent";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../url.js";

export default function ProfilePage() {
    const { userId } = useParams();
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!userId) {
            console.error("No ID found in URL");
            setIsLoading(false);
            return;
        }

        const getUser = async () => {
            try {
                const response = await fetch(`${API}/user/${userId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch user data.");
                }

                const data = await response.json();
                console.log("Fetched User Data:", data); // Debug API response
                setUserData(data);
            } catch (error) {
                console.error("Error fetching user data:", error.message);
            } finally {
                setIsLoading(false);
            }
        };

        getUser();
    }, [userId]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!userData) {
        return <p>User not found.</p>;
    }

    return (
        <div className="profilePage">
            <ProfileHeader
                user_name={String(userData.user_name || "Unknown")}
                user_tag={String(userData.user_tag || "@unknown")}
                user_bio={String(userData.user_bio || "No bio available.")}
            />
        <ProfileContent />
        </div>
    );
}
