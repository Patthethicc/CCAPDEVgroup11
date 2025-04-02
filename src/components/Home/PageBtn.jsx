export default function PageBtn({ onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[var(--background-color)] rounded-lg py-[0.2rem] text-xs min-w-[20%] shadow-md 
        focus-within:border-[var(--field-border-color)] hover:bg-[var(--brighter-bg-color)] transition-colors
        border-solid border-2 border-transparent font-bold text-[var(--sub-text-color)]  ${className}`}
    >
      {children}
    </button>
  );
}
