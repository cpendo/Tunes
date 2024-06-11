import { useState } from "react";

const VolumeBar = () => {
  const [volumeValue, setVolumeValue] = useState(0.4);
  return (
    <div className="hidden md:flex items-center gap-1 text-xl ">
      {volumeValue <= 1 && volumeValue >= 0.5 && (
        <i
          className="fa-solid fa-volume-high w-6"
          onClick={() => setVolumeValue(0)}
        ></i>
      )}
      {volumeValue < 0.5 && volumeValue > 0 && (
        <i
          className="fa-solid fa-volume-low w-6"
          onClick={() => setVolumeValue(0)}
        ></i>
      )}
      {volumeValue === 0 && (
        <i
          className="fa-solid fa-volume-xmark w-6"
          onClick={() => setVolumeValue(1)}
        ></i>
      )}
      <input
        type="range"
        min="0"
        max="1"
        step="0.2"
        value={volumeValue}
        onChange={(e) => setVolumeValue(parseFloat(e.target.value))}
        className="h-1 rounded-lg 2xl:w-64 md:w-48"
      />
    </div>
  );
};

export default VolumeBar;
