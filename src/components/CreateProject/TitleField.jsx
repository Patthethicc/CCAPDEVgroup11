import "../../App.css";

export default function TitleField() {
  return (
    <div
      className="title relative hover:bg-[var(--brighter-bg-color)] transition-colors flex-c 
        bg-[var(--background-color)] w-full padding-[0.2em] rounded-lg border-solid border-transparent
        border-2 focus-within:border-[var(--field-border-color)] h-[70px] shadow-md"
    >
      <p className="mx-3 mt-2 text-s font-bold ">Title</p>
      <textarea
        className="pl-3 pt-2 resize-none max-h-7 overflow-y-scroll text-xs outline-none text-base bg-transparent rounded-lg"
        type="text"
        placeholder="Title here"
      />
    </div>
  );
}
