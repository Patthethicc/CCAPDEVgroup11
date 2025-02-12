import "./PostDetails.css";

import TitleDeadline from "./TitleDeadline.jsx";
import CaptionImage from "./CaptionImage";
import PostAction from "./PostActions";
import CommentSection from "./CommentSection";

export default function PostDetails() {
  return (
    <div className="post-details-container">
      <TitleDeadline />
      <CaptionImage />
      <PostAction />
      <CommentSection />
    </div>
  );
}
