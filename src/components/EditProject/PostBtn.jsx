export default function PostBtn() {
  return (
    <button
      className="bg-[var(--background-color)] rounded-lg py-[0.2rem] text-xs w-[20%] shadow-md
        focus-within:border-[var(--field-border-color)] hover:bg-[var(--brighter-bg-color)] transition-colors
        border-solid border-2 border-transparent font-bold ml-[350px] text-[var(--sub-text-color)] "
    >
      Post
    </button>
  );
}
