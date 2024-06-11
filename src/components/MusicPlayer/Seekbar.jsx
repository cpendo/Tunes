const Seekbar = () => {
    let value = 30, max = 100;
  // converts the time to format 0:00
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <div className="hidden md:flex flow-row justify-center items-center gap-3 w-full lg:w-96">
      <p className="text-white">{value === 0 ? "0:00" : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value="10"
        min="0"
        max="20"
        className="md:block w-24 md:w-56 2xl:w-96 h-1 rounded-lg"
      />
      <p className="text-white">{max === 0 ? "0:00" : getTime(max)}</p>
    </div>
  );
};



export default Seekbar;
