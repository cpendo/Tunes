const Track = () => {
  return (
    <div className="flex justify-center items-center gap-2 ">
      <div className="w-16 h-16 sm:block hidden bg-slate-400"></div>
      <div className="flex flex-col">
        <p className="truncate text-white font-bold text-xl font-display">Song Name</p>
        <p className="truncate font-primary text-lg text-gray-300">Song Artist</p>
      </div>
    </div>
  );
};

export default Track;
