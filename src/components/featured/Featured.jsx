import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "../featured/featured.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "movies" : "series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
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
