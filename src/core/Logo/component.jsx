import React from "react";
import T from "prop-types";

const Logo = ({ theme }) => (
  <a href="/" className="h-32">
    <svg
      data-id="meganav-logo"
      className={`${theme.logoTextColor} transition-colors`}
      width="108"
      height="32"
      viewBox="0 0 108 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="text">
        <path
          d="M68.5199 22.6856V2H72.2545V9.48895C73.5194 8.28463 75.1488 7.61669 76.8693 7.61669C80.9073 7.61669 84.4898 10.6932 84.4898 15.3283C84.4898 19.9633 80.9073 23.05 76.8693 23.05C75.0577 23.05 73.3471 22.3314 72.0723 21.0259V22.6856H68.5199ZM80.7553 15.3283C80.7553 12.7375 78.9135 10.926 76.5049 10.926C74.1571 10.926 72.3456 12.6464 72.2545 15.1461V15.3283C72.2545 17.919 74.0962 19.7305 76.5049 19.7305C78.9135 19.7305 80.7553 17.919 80.7553 15.3283ZM86.2202 22.6856V2H89.9547V22.6856H86.2202ZM95.1765 28.0493L97.3525 22.8577L91.442 7.98103H95.48L99.2447 18.3744L103.07 7.98103H107.169L99.1536 28.0594H95.1765V28.0493ZM62.5896 7.98103V9.85324C61.294 8.43642 59.4824 7.62684 57.6204 7.62684C53.5826 7.62684 50 10.7034 50 15.3384C50 19.9835 53.5826 23.05 57.6204 23.05C59.5537 23.05 61.3851 22.21 62.7109 20.7021V22.6957H65.9697V7.98103H62.5896ZM62.2253 15.3283C62.2253 17.8887 60.3835 19.7305 57.9748 19.7305C55.5661 19.7305 53.7242 17.8887 53.7242 15.3283C53.7242 12.7679 55.5661 10.926 57.9748 10.926C60.3226 10.926 62.1342 12.6768 62.2253 15.1461V15.3283Z"
          fill="currentColor"
        />
      </g>
      <g className="triangle">
        <path d="M19.0968 0L3.11701 29.2473L0 27.0614L14.7856 0H19.0968ZM19.3194 0L35.2992 29.2473L38.4162 27.0614L23.6306 0H19.3194Z" fill="url(#gradient)" />
        <path d="M35.0765 29.4194L19.2081 16.9918L3.33966 29.4194L6.57813 31.6863L19.2081 21.7989L31.8381 31.6863L35.0765 29.4194Z" fill="url(#gradient)" />
      </g>
      <defs>
        <linearGradient id="gradient" x1="19.2081" y1="0" x2="3" y2="28.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF0902" />
          <stop offset="1" stopColor="#FF5215" />
        </linearGradient>
      </defs>
    </svg>
  </a>
);

Logo.propTypes = {
  logoPath: T.string,
};

export default Logo;
