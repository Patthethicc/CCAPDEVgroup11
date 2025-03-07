import TitleField from "../components/EditProject/TitleField.jsx";
import StsDropdownMenu from "../components/EditProject/StsDropdownMenu.jsx";
import BodyField from "../components/EditProject/BodyField.jsx";
import UploadFilesBtn from "../components/EditProject/UploadFilesBtn.jsx";
import PostBtn from "../components/EditProject/PostBtn.jsx";

export default function EditProject() {
  return (
    <div
      className="create-project flex px-8 py-6 flex-col 
      mx-[55px] max-w-[550px] w-full 
      bg-[var(--primary-color)] box-border rounded-lg gap-4 shadow-md"
    >
      <h1 className="font-bold text-xl">Edit Project</h1>
      <TitleField value="My Astrology Chart" />
      <StsDropdownMenu value="In Progress" />
      <BodyField value="This is my current progress on my astronomy map! please let me know how it is and what I need to change <3" />
      <UploadFilesBtn />
      <PostBtn />
    </div>
  );
}
