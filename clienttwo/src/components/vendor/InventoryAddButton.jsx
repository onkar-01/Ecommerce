import React from "react";
import InventoryForm from "./InventoryForm";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const InventoryAddButton = ({ icon, handleDelete }) => {
  return (
    <>
      <div data-dial-init class="fixed right-6 bottom-6 group">
        {icon === "AiOutlinePlus" ? (
          <button
            data-modal-target="defaultModal"
            data-modal-toggle="defaultModal"
            type="button"
            data-dial-toggle="speed-dial-menu-default"
            aria-controls="speed-dial-menu-default"
            aria-expanded="false"
            class="flex items-center justify-center text-white ease-out duration-300 hover:scale-125 bg-[#ff742e] rounded-full w-14 h-14 hover:bg-[#ff742e] focus:ring-4 focus:ring-[#ff742e] focus:outline-none dark:focus:ring-[#ff742e9d]"
          >
            <AiOutlinePlus size={30} />
            <span class="sr-only">Open actions menu</span>
          </button>
        ) : (
          <button
            type="button"
            data-dial-toggle="speed-dial-menu-default"
            aria-controls="speed-dial-menu-default"
            aria-expanded="false"
            class="flex items-center justify-center text-white ease-out duration-300 hover:scale-125 bg-[#ff742e] rounded-full w-14 h-14 hover:bg-[#ff742e] focus:ring-4 focus:ring-[#ff742e] focus:outline-none dark:focus:ring-[#ff742e9d]"
            onClick={handleDelete}
          >
            <MdDelete size={30} />
            <span class="sr-only">Delete Inventory</span>
          </button>
        )}
      </div>

      {/* <!-- Main modal --> */}
      <div
        id="defaultModal"
        tabindex="-1"
        aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Add Inventory
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-6 space-y-6">
              <InventoryForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryAddButton;
