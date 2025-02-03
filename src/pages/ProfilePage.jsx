import ProfileHeader from "../components/ProfilePage/ProfileHeader";
import ProfileContent from "../components/ProfilePage/ProfileContent";

export default function ProfilePage() {
	return (
	  <div className="profilePage">
		<ProfileHeader></ProfileHeader>
		<ProfileContent></ProfileContent>
	  </div>
	);
  }