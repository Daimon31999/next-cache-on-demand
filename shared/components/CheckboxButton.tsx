/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useState } from "react";

const CheckboxButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <button
      type="button"
      className={`relative w-6 h-6 flex items-center justify-center rounded bg-white border-2 ${
        isChecked ? "border-blue-500 bg-blue-500" : "border-gray-300"
      }`}
      onClick={() => setIsChecked(!isChecked)}
      aria-checked={isChecked}
    >
      {isChecked && (
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      )}
    </button>
  );
};

export default CheckboxButton;
