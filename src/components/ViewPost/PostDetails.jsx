import TitleDeadline from "./TitleDeadline";
import "./styles.css";
import CaptionImage from "./CaptionImage";
import PostAction from "./PostActions";

import CommentSection from "./CommentSection";

export default function PostDetails() {
  return (
    <div className="post-details-container">
      {/* INSER POST DETAILS COMPONENTS HERE */}
      <TitleDeadline />
      <CaptionImage />
      <PostAction />
      <CommentSection />
    </div>
  );
}
