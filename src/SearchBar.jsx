import { useState } from "react"
import Card from "./Card";
const SearchBar = ({handleChange,searchInput}) => {
  
 
  return (
    <div className="m-4">
  <div className="flex justify-center items-center w-[70%] lg:w-[50%]  m-auto">
    <input
      type="search"
      className="relative m-0 block w-[20px] min-w-0 flex-auto rounded border border-solid border-neutral-600 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none  "
      placeholder="Search"
      onChange={handleChange}
      value={searchInput}
       />

    
    <span
      className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 cursor-auto "
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clipRule="evenodd" />
      </svg>
    </span>
  </div>
</div>
  )
}

export default SearchBar