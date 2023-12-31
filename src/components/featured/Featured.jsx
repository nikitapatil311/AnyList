import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "../featured/featured.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>

          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/family-movies-on-netflix-benji-1651076104.jpeg"
        alt=""
      />
      <div className="info">
        <img
          src="https://logos.flamingtext.com/Name-Logos/Benji-design-sketch-name.png"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quos
          blanditiis eum necessitatibus aliquam autem inventore a ratione
          expedita molestiae dolorem quidem, architecto temporibus, soluta sed
          magni aliquid recusandae deleniti.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
