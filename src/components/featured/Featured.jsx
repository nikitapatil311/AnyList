import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "../featured/featured.scss";

export default function Featured() {
  return (
    <div className="featured">
      <img
        src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png"
        alt=""
      />
      <div className="info">
        <img
          src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png"
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
          </button>
        </div>
      </div>
    </div>
  );
}
