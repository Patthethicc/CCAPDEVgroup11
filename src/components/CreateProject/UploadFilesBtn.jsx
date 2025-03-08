import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UploadFilesBtn({ file, setFile }) {
  const handleFileChange = (event) => {
    const uploaded_file = event.target.files[0];
    if (uploaded_file) {
      setFile(uploaded_file);
    }
  };

  return (
    <div className="flex items-center">
      <label
        htmlFor="file-upload"
        className="cursor-pointer bg-[var(--background-color)] rounded-lg py-2 px-4 text-xs w-[20%] h-8 shadow-md
        focus-within:border-[var(--field-border-color)] hover:bg-[var(--brighter-bg-color)] transition-colors
        border-solid border-2 border-transparent font-bold flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faPaperclip} className="mr-2" />
        Upload
      </label>
      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />

      {file && <p className="text-sm ml-5 underline ">{file.name}</p>}
    </div>
  );
}
