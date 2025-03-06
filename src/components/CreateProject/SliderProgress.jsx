import { useState } from "react";
import StsDropdownMenu from "./StsDropdownMenu.jsx";
import { Slider } from "@mui/material";

export default function SliderProgress({
  progress,
  setProgress,
  deadlength,
  setDeadLength,
}) {
  const handleChange = function (event, new_deadlength) {
    setDeadLength(new_deadlength);
  };

  return (
    <div className="flex items-center justify-start gap-10">
      <div className="flex-none">
        <StsDropdownMenu progress={progress} setProgress={setProgress} />{" "}
      </div>
      <div className="flex-grow" />
      <div className="bg-[var(--background-color)] flex-none mr-[50px] py-2 px-4 w-[45%] rounded-lg shadow-md font-bold">
        Progress Percentage
        <Slider
          defaultValue={0}
          value={deadlength}
          aria-label="Default"
          onChange={handleChange}
          valueLabelDisplay="auto"
          sx={{
            color: "var(--secondary-color)",
            "& .MuiSlider-thumb": {
              "&:hover, &.Mui-focusVisible": {
                boxShadow: "0px 0px 0px 8px rgba(105, 121, 115, 0.16)",
              },
              "&.Mui-active": {
                boxShadow: "0px 0px 0px 14px rgba(105, 121, 115, 0.16)",
              },
            },
          }}
        />
      </div>
    </div>
  );
}
