import "./styles.css";

import "./CaptionContainer.css";

export default function CaptionContainer(props) {
  return (
    <>
      <div className="post-caption-paragraph">
        <p id="post-caption"> {props.caption} </p>
      </div>
    </>
  );
}
