/* eslint-disable react/prop-types */

export function BookIcon({ className = null }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#FFC73B"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="black"
      className={className || "w-10 h-10"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
  );
}

export function Usericon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 448 512"
      {...props}
    >
      <path d="M224 256a128 128 0 100-256 128 128 0 100 256zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3h-91.4z" />
    </svg>
  );
}

export function DropdownIcon(props) {
  return (
    <svg
      aria-hidden="true"
      className="w-4 h-4 ml-1"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="w-5 h-5"
      fill="none"
      stroke="black"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

export function AccordiionIcon() {
  return (
    <span className="transition duration-300 shrink-0 group-open:-rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

// export function CartIcon(props) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       height="1em"
//       viewBox="0 0 576 512"
//       {...props}
//     >
//       <path d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1196 0 48 48 0 11-96 0zm336-48a48 48 0 110 96 48 48 0 110-96z" />
//     </svg>
//   );
// }

export function CartIcon(props) {
  return (
    <svg
      fill="yellow"
      width="3em"
      viewBox="-1.9 -1.9 22.80 22.80"
      xmlns="http://www.w3.org/2000/svg"
      className="cf-icon-svg"
      {...props}
    >
      <path d="M14.252 4.59a.924.924 0 01.921.92v3.602a1.048 1.048 0 01-.916 1.017l-8.511.883a.573.573 0 01-.145.019.577.577 0 100 1.154h8.488a.563.563 0 110 1.126h-.91a1.03 1.03 0 11-1.104 0H6.849a1.03 1.03 0 11-1.104 0H5.6a1.703 1.703 0 110-3.406.585.585 0 01.128.014L3.111 3.911H1.39a.563.563 0 110-1.125h2.09a.562.562 0 01.515.337l.64 1.466h9.617z" />
    </svg>
  );
}
