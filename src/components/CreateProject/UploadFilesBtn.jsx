import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UploadFilesBtn({ files, setFiles }) {
  const handleFileChange = function (e) {
    setFiles([...e.target.files]);
  };

  return (
    <div className="sticky">
      <input
        type="file"
        onChange={handleFileChange}
        className="absolute inset-0 w-[20%] h-[20%] opacity-0 cursor-pointer"
      />
      <button
        className="bg-[var(--background-color)] rounded-lg py-[0.2rem] mt-3 text-xs w-[20%] shadow-md
        focus-within:border-[var(--field-border-color)] hover:bg-[var(--brighter-bg-color)] transition-colors
        border-solid border-2 border-transparent font-bold"
      >
        <FontAwesomeIcon icon={faPaperclip} className="mx-1 " />
        Upload
      </button>
    </div>
  );
}
