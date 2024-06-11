import { useState } from "react";

const Controls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [repeat, setRepeat] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center justify-center gap-4 md:text-xl text-2xl md:w-36 lg:w-52 2xl:w-80">
      <i className="fa-solid fa-shuffle hidden md:block cursor-pointer"></i>
      <i className="fa-solid fa-backward-step cursor-pointer"></i>
      {isPlaying ? (
        <i
          className="fa-solid fa-circle-pause text-4xl cursor-pointer"
          onClick={handlePlay}
        ></i>
      ) : (
        <i
          className="fa-solid fa-circle-play text-4xl cursor-pointer"
          onClick={handlePlay}
        ></i>
      )}
      <i className="fa-solid fa-forward-step cursor-pointer"></i>
      <i
        className={`fa-solid fa-repeat hidden md:block ${repeat ? "text-orange" : ""}`}
        onClick={() => setRepeat(!repeat)}
      ></i>
    </div>
  );
};

export default Controls;
