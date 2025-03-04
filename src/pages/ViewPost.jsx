import ProfileHeader from "../components/ViewPost/ProfileHeader.jsx";
import PostDetails from "../components/ViewPost/PostDetails.jsx";

export default function ViewPost() {
  return (
    <>
      {/* Change classname after import from 'view-content' to 'viewPostPage' */}
      <div className="viewPostPage">
        <ProfileHeader />
        <PostDetails />
      </div>
    </>
  );
}
