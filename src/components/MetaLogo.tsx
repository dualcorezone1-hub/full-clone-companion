const MetaLogo = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 120 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Meta infinity symbol */}
      <path
        d="M8.5 6C5.5 6 3 8.5 3 12C3 15.5 5.5 18 8.5 18C10.5 18 12 17 13 15.5C14 17 15.5 18 17.5 18C20.5 18 23 15.5 23 12C23 8.5 20.5 6 17.5 6C15.5 6 14 7 13 8.5C12 7 10.5 6 8.5 6ZM8.5 8.5C10 8.5 11.2 9.7 11.8 11.2L13 13L14.2 11.2C14.8 9.7 16 8.5 17.5 8.5C19 8.5 20.5 10 20.5 12C20.5 14 19 15.5 17.5 15.5C16 15.5 14.8 14.3 14.2 12.8L13 11L11.8 12.8C11.2 14.3 10 15.5 8.5 15.5C7 15.5 5.5 14 5.5 12C5.5 10 7 8.5 8.5 8.5Z"
        fill="hsl(214, 89%, 52%)"
      />
      {/* Meta text */}
      <text x="28" y="17" fill="hsl(0, 0%, 30%)" fontSize="14" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="400">
        Meta
      </text>
    </svg>
  );
};

export default MetaLogo;
