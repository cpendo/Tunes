import { useState } from "react";
import { genres } from "../assets/constants";
import { SongCard } from "../components";

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(genres[0].title);

  const handleChange = (genreValue) => {
    const genre = genres.find(({ value }) => value === genreValue).title;
    setSelectedGenre(genre);
  };

  return (
    <div className="bg-blue lg:basis-4/6 p-4">
      <div className="flex flex-row justify-start items-center rounded-full bg-white w-fit h-fit text-black px-2 py-1">
        <i className="fa-solid fa-magnifying-glass fa-lg"></i>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="ms-2 outline-none md:w-fit w-[90%] "
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-5">
        <h2 className="text-3xl text-orange font-display">Discover {selectedGenre}</h2>
        <select
          name="genres"
          defaultValue={selectedGenre}
          className="text-black w-fit outline-none font-primary font-semibold text-xl mt-3 sm:mt-0"
          onChange={(e) => handleChange(e.target.value)}
        >
          {genres?.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}{" "}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-start gap-3">
        {[1,2,3,4,5,6,7,8,9,10].map((song,i) => <SongCard key={i} song={song} i={i} />)}
      </div>
    </div>
  );
};

export default Discover;
