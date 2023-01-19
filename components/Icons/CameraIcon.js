import React from "react";

export default function CameraIcon({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 29"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_205_11)">
        <path d="M6 21C5.45 21 4.97933 20.8043 4.588 20.413C4.196 20.021 4 19.55 4 19V7C4 6.45 4.196 5.97933 4.588 5.588C4.97933 5.196 5.45 5 6 5H9.15L11 3H17V5H11.875L10.05 7H6V19H22V8H24V19C24 19.55 23.8043 20.021 23.413 20.413C23.021 20.8043 22.55 21 22 21H6ZM22.65 7C22.65 5.7 22.2 4.6 21.3 3.7C20.4 2.8 19.3 2.35 18 2.35V1C19.6667 1 21.0833 1.58333 22.25 2.75C23.4167 3.91667 24 5.33333 24 7H22.65ZM20 7C20 6.45 19.8043 5.97933 19.413 5.588C19.021 5.196 18.55 5 18 5V3.65C18.9167 3.65 19.6957 3.975 20.337 4.625C20.979 5.275 21.3167 6.06667 21.35 7H20ZM14 17.5C15.25 17.5 16.3127 17.0627 17.188 16.188C18.0627 15.3127 18.5 14.25 18.5 13C18.5 11.75 18.0627 10.6873 17.188 9.812C16.3127 8.93733 15.25 8.5 14 8.5C12.75 8.5 11.6873 8.93733 10.812 9.812C9.93733 10.6873 9.5 11.75 9.5 13C9.5 14.25 9.93733 15.3127 10.812 16.188C11.6873 17.0627 12.75 17.5 14 17.5ZM14 15.5C13.3 15.5 12.7083 15.2583 12.225 14.775C11.7417 14.2917 11.5 13.7 11.5 13C11.5 12.3 11.7417 11.7083 12.225 11.225C12.7083 10.7417 13.3 10.5 14 10.5C14.7 10.5 15.2917 10.7417 15.775 11.225C16.2583 11.7083 16.5 12.3 16.5 13C16.5 13.7 16.2583 14.2917 15.775 14.775C15.2917 15.2583 14.7 15.5 14 15.5Z" />
      </g>
      <defs>
        <filter
          id="filter0_d_205_11"
          x="-2"
          y="0"
          width="32"
          height="32"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_205_11"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_205_11"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
