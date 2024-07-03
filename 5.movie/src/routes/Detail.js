import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await response.json();
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  return (
    <div>
      <h1>Detail Page</h1>
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.description_full}</p>
          <img src={movie.large_cover_image} alt={movie.title} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Detail;
