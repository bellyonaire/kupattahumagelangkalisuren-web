import React from 'react';

// Official GoFood Logo / Icon (Red with GoFood plate & fork-spoon / Gojek brand)
export const GoFoodIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="48" height="48" rx="12" fill="#EE2737" />
    <path
      d="M24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10ZM24 34.5C18.201 34.5 13.5 29.799 13.5 24C13.5 18.201 18.201 13.5 24 13.5C29.799 13.5 34.5 18.201 34.5 24C34.5 29.799 29.799 34.5 24 34.5Z"
      fill="white"
      fillOpacity="0.3"
    />
    <path
      d="M19 16V22C19 23.657 20.343 25 22 25V33H20V33H18V33V25C17.4477 25 17 24.5523 17 24V16H18V21H19V16ZM21 16H22V21H21V16ZM29 16C29 16 30 16 30 20C30 23.5 28 25 26 25V33H24V16C26.5 16 29 16 29 16Z"
      fill="white"
    />
    <circle cx="33" cy="15" r="2.5" fill="#FFC72C" />
  </svg>
);

// Official GrabFood Logo / Icon (Emerald Green with GrabFood emblem / bowl & fork)
export const GrabFoodIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="48" height="48" rx="12" fill="#00B14F" />
    <path
      d="M12 25C12 31.6274 17.3726 37 24 37C30.6274 37 36 31.6274 36 25H12Z"
      fill="white"
    />
    <path
      d="M24 11C20.5 11 17.5 13 16 16L32 16C30.5 13 27.5 11 24 11Z"
      fill="white"
    />
    <path
      d="M14 20C14 18.8954 14.8954 18 16 18H32C33.1046 18 34 18.8954 34 20C34 21.1046 33.1046 22 32 22H16C14.8954 22 14 21.1046 14 20Z"
      fill="white"
    />
    <circle cx="24" cy="29" r="2" fill="#00B14F" />
  </svg>
);

// Official ShopeeFood Logo / Icon (Orange with ShopeeFood bag & utensils)
export const ShopeeFoodIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="48" height="48" rx="12" fill="#EE4D2D" />
    <path
      d="M24 10C21.2386 10 19 12.2386 19 15V17H14C12.8954 17 12 17.8954 12 19L14 36C14.1 37.1 15 38 16.1 38H31.9C33 38 33.9 37.1 34 36L36 19C36 17.8954 35.1046 17 34 17H29V15C29 12.2386 26.7614 10 24 10ZM21.5 15C21.5 13.6193 22.6193 12.5 24 12.5C25.3807 12.5 26.5 13.6193 26.5 15V17H21.5V15Z"
      fill="white"
    />
    <path
      d="M26.5 23.5C26.5 22.6716 25.8284 22 25 22H21.5C20.6716 22 20 22.6716 20 23.5C20 24.3284 20.6716 25 21.5 25H25C25.8284 25 26.5 25.6716 26.5 26.5C26.5 27.3284 25.8284 28 25 28H21.5C20.6716 28 20 27.3284 20 26.5"
      stroke="#EE4D2D"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M24 20V22M24 28V30"
      stroke="#EE4D2D"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const DELIVERY_LINKS = {
  gofood: "https://gofood.link/a/ScMqHom",
  grabfood: "https://r.grab.com/g/6-20260825_114339_a4291ddf4bdb4dcba8681ec5ac8d0a9c_MEXMPS-6-C76CJCKBAPWGPA",
  shopeefood: "https://spf.shopee.co.id/2VnVvlTf0y",
};
