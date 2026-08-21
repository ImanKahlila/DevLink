import heroImg from './assets/hero.png'
import { TileMosaic, ImageTileMask } from './shapes'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-12 p-8">
      <section className="w-full max-w-md">
        <h2 className="mb-4 text-sm font-medium text-gray-500">Tile mosaic</h2>
        <TileMosaic className="w-full h-auto" />
      </section>

      <section className="w-full max-w-md">
        <h2 className="mb-4 text-sm font-medium text-gray-500">
          Image masked by tile-02 + tile-05 + tile-08
        </h2>
        <ImageTileMask
          shapeIds={['tile-02', 'tile-05', 'tile-08']}
          src={heroImg}
          alt="Hero"
          className="w-full h-auto"
        />
      </section>
    </div>
  )
}

export default App
