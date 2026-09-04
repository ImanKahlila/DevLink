import Tile from "./Tile";
import { tileData, viewBox } from "./tileData";

function TileMosaic({ className, tileClassName }) {
  return (
    <svg
      viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {tileData.map((tile) => (
        <Tile key={tile.id} {...tile} className={tileClassName} />
      ))}
    </svg>
  );
}

export default TileMosaic;
