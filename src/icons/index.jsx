/* eslint-disable react/prop-types */

export function BookIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#FFC73B"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="black"
      width={"2.5rem"}
      height={"2.5rem"}
      {...props}
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

export function StarIconFill(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 576 512"
      fill="#ffc800"
      {...props}
    >
      <path d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2L316.9 18z" />
    </svg>
  );
}

export function StarIconNone(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 576 512"
      fill="#858585"
      {...props}
    >
      <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4 459.8 484c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6 68.6-141.3C270.4 5.2 278.7 0 287.9 0zm0 79l-52.5 108.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9l85.9 85.1c5.5 5.5 8.1 13.3 6.8 21l-20.3 119.7 105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2-20.2-119.6c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1-118.3-17.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
    </svg>
  );
}
