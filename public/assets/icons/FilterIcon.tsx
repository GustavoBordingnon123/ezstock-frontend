import React from "react";

interface FilterIconProps {
    width?: number;
    height?: number;
}

function FilterIcon({ width = 24, height = 28 }: FilterIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 28"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.79 27.01l-.014.003-.095.047-.026.005-.019-.005-.095-.047c-.014-.004-.025-.002-.032.007l-.005.013-.023.571.007.027.013.017.139.099.02.005.016-.005.139-.099.016-.021.005-.023-.023-.57c-.003-.014-.01-.022-.022-.023zm.354-.15l-.017.003-.247.124-.013.013-.004.015.024.573.006.016.011.01.268.123c.017.005.03.001.039-.01l.005-.019-.045-.819c-.005-.016-.014-.026-.027-.029zm-.953.003a.027.027 0 00-.036.008l-.008.018-.046.819c.001.016.009.027.023.032l.02-.003.268-.124.013-.01.006-.015.022-.573-.004-.016-.013-.014-.245-.122zM0 2a2 2 0 012-2h20a2 2 0 012 2v2.781c0 .708-.281 1.386-.781 1.886L16 13.885v9.899a1.466 1.466 0 01-2.123 1.312l-4.956-2.477A1.666 1.666 0 018 21.128v-7.243L.781 6.667c-.5-.5-.78-1.178-.781-1.886V2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default FilterIcon;
