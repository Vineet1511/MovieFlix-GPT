import { useSelector } from "react-redux";
import useTrailerMovie from "../hooks/useTrailerMovie";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useTrailerMovie(movieId);

  return (
    <div className=" w-screen md:h-[150vh] h-[25vh] overflow-hidden">
      <iframe
        className="absolute w-screen max-h-max aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&cc_load_policy=0&modestbranding=1&showinfo=0&iv_load_policy=3&rel=0&fs=0&disablekb=1&playsinline=1`}
        title="YouTube video player"
        allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      ></iframe>
    </div>
  );
};
export default VideoBackground;