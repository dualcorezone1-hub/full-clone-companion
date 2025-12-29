const FacebookLogo = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="18" fill="hsl(214, 89%, 52%)" />
      <path
        d="M24.5 18.5H21V16.5C21 15.7 21.3 15 22.5 15H24.5V11.5C24.5 11.5 22.9 11 21.5 11C18.5 11 16.5 12.8 16.5 16V18.5H13.5V22.5H16.5V32C17.3 32.2 18.1 32.3 19 32.3C19.8 32.3 20.6 32.2 21.4 32V22.5H24L24.5 18.5Z"
        fill="white"
      />
    </svg>
  );
};

export default FacebookLogo;
