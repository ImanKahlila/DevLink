function Tile({ d, fill, id, className, ...rest }) {
  return <path id={id} d={d} fill={fill} className={className} {...rest} />;
}

export default Tile;
