import { SVGProps } from "react";

const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#0C0C0C"
      strokeDasharray="0.2 0.2"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M12 5v7M14 11l-1.168 1.752a1 1 0 0 1-1.664 0L10 11"
    ></path>
    <path
      stroke="#0C0C0C"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M16.5 10h.7a2.8 2.8 0 0 1 2.8 2.8v3.403A2.797 2.797 0 0 1 17.206 19c-3.59.001-6.484-.01-10.4-.008A2.804 2.804 0 0 1 4 16.19V12.8A2.8 2.8 0 0 1 6.8 10H7"
    ></path>
  </svg>
);

export default DownloadIcon;
