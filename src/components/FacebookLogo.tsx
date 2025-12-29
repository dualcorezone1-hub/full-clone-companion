const FacebookLogo = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="#1877F2" />
      <path
        d="M33.12 30.75L34.155 24H27.75V19.5C27.75 17.6025 28.6725 15.75 31.6575 15.75H34.5V10.125C34.5 10.125 32.0025 9.75 29.6175 9.75C24.63 9.75 21.375 12.7725 21.375 18.225V24H15.5625V30.75H21.375V47.6175C22.5525 47.7975 23.7525 47.895 24.975 47.895C26.1975 47.895 27.3975 47.7975 28.575 47.6175V30.75H33.12Z"
        fill="white"
      />
    </svg>
  );
};

export default FacebookLogo;
