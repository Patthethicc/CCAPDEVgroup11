import { useState } from "react";
import StsDropdownMenu from "./StsDropdownMenu.jsx";
import { Slider } from "@mui/material";

export default function SliderProgress() {
  const [value, setValue] = useState(0);

  const handleCHange = function (event, newValue) {
    setValue(newValue);
  };
  return (
    <div className="flex items-center justify-start gap-10">
      <StsDropdownMenu />{" "}
      <div className="bg-[var(--background-color)] py-2 px-4 w-[45%] rounded-lg shadow-md font-bold">
        Progress Percentage
        <Slider
          defaultValue={0}
          aria-label="Default"
          onChange={handleCHange}
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
