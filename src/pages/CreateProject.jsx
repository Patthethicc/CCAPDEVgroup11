import TitleField from "../components/CreateProject/TitleField.jsx";
import StsDropdownMenu from "../components/CreateProject/StsDropdownMenu.jsx";
import "../App.css";

export default function CreateProject() {
  return (
    <div
      className="create-project flex px-8 py-6 flex-col 
      mx-[55px] max-w-[550px] w-full 
      bg-[var(--primary-color)] box-border rounded-lg gap-4 shadow-md"
    >
      <h1 className="font-bold text-xl">Create Project</h1>
      <TitleField />
      <StsDropdownMenu />
    </div>
  );
}
