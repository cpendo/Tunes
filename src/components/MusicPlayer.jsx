import Track from "./MusicPlayer/Track";
import { Controls, VolumeBar, Seekbar } from "./MusicPlayer/index";

const MusicPlayer = () => {
  return (
    <div className="fixed bottom-0 w-full px-6 sm:py-3 py-4 bg-blue-dark/85  text-white ">
      <div className="flex flex-row justify-between items-center gap-4">
        <Track />
        <div className="flex flex-col gap-2 items-center justify-center ">
          <Controls />
          <Seekbar />
        </div>
        <VolumeBar />
      </div>
    </div>
  );
};

export default MusicPlayer;
