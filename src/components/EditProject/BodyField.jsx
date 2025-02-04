import "../../App.css";

export default function BodyField({ value, onChange }) {
  return (
    <div
      className="title relative hover:bg-[var(--brighter-bg-color)] transition-colors flex-c 
        bg-[var(--background-color)] w-full padding-[0.2em] rounded-lg border-solid border-transparent
        border-2 focus-within:border-[var(--field-border-color)] h-[150px] shadow-md"
    >
      <p className="mx-3 mt-2 text-s font-bold ">Body</p>
      <textarea
        className="pl-3 pt-2 resize-none max-h-[115px] w-full h-full overflow-y-scroll text-xs outline-none text-base bg-transparent rounded-lg"
        type="text"
        placeholder="Body"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
