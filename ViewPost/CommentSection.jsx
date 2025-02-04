import "./styles.css";
import Comments from "./Comments";

export default function CommentSection() {
  return (
    <>
      <div className="post-comment-section">
        <Comments
          profile_url="https://i.pinimg.com/736x/dc/9f/f6/dc9ff6bfce06bd402d16edb127cfbc6f.jpg"
          userName_time="tom_n00k - 18 hn.ago"
          comment="You did so good! Keep it up!"
        />
        <Comments
          profile_url="https://i.pinimg.com/736x/c6/8c/e6/c68ce664ae649625c13190e68aa954ac.jpg"
          userName_time="isabelle_smiles - 08 hn.ago"
          comment="Can't wait to see your finished product!"
        />

        <Comments
          profile_url="https://i.pinimg.com/736x/c6/8c/e6/c68ce664ae649625c13190e68aa954ac.jpg"
          userName_time="isabelle_smiles2 - 07 hn.ago"
          comment="Can't wait to see your finished product! (2)"
        />
      </div>
    </>
  );
}
