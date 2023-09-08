import React from "react";
import { MdFilterListAlt } from "react-icons/md";

const Filter = () => {
  return (
    <div data-dial-init class="fixed right-6 bottom-6 group ">
      <div
        id="speed-dial-menu-default"
        class="flex flex-col items-center bg-[#ff742e] opacity-0; rounded-[100%]  mb-4 space-y-2"
      >
        <button
          type="button"
          data-tooltip-target="tooltip-share"
          data-tooltip-placement="left"
          class="flex justify-center text-white items-center w-[52px] h-[52px]"
        >
          <MdFilterListAlt className="opacity-100 z-10" size={30} />
        </button>
      </div>
    </div>
  );
};

export default Filter;
