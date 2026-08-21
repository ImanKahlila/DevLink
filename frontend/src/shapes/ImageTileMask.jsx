import { useId } from 'react'
import { tileData, viewBox } from './tileData'

function ImageTileMask({ shapeIds, src, alt = '', className }) {
  const clipId = `image-tile-mask-${useId()}`
  const selectedTiles = tileData.filter((tile) => shapeIds.includes(tile.id))

  return (
    <svg
      viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id={clipId}>
          {selectedTiles.map((tile) => (
            <path key={tile.id} d={tile.d} />
          ))}
        </clipPath>
      </defs>
      <image
        href={src}
        aria-label={alt}
        width={viewBox.width}
        height={viewBox.height}
        preserveAspectRatio="xMidYMid slice"
        clipPath={`url(#${clipId})`}
      />
    </svg>
  )
}

export default ImageTileMask
