import { BrandMark } from "../brand/BrandMark.jsx";

export function RouteLoader() {
  return (
    <main
      className="route-loader"
      aria-live="polite"
      aria-label="Loading DevLink"
    >
      <BrandMark />
      <div className="loader-tiles" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
      <p>Loading your space</p>
    </main>
  );
}
