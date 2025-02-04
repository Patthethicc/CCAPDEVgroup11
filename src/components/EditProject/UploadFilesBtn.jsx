import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UploadFilesBtn() {
  return (
    <button
      className="bg-[var(--background-color)] rounded-lg py-[0.2rem] mt-3 text-xs w-[20%] shadow-md
        focus-within:border-[var(--field-border-color)] hover:bg-[var(--brighter-bg-color)] transition-colors
        border-solid border-2 border-transparent font-bold"
    >
      <FontAwesomeIcon icon={faPaperclip} className="mx-1 " />
      Upload
    </button>
  );
}
