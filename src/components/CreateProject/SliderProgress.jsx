import * as React from "react";
import { Slider } from "@mui/material";

export default function SliderProgress() {
  return (
    <div className="relative bg-[var(--background-color)] py-2 px-4 w-[45%] rounded-lg shadow-md font-bold">
      Progress Percentage
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </div>
  );
}
