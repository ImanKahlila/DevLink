import heroImg from './assets/hero.png'
import { TileMosaic, ImageTileMask } from './shapes'
import { useTheme } from './providers/ThemeProvider.jsx'
import './App.css'
import MainButton from './components/mainButton.jsx'
import { ArrowRight } from 'lucide-react';
import SocialProof from './components/socialProof.jsx';

function Homepage() {
  const { theme, colorValues } = useTheme();

const themeStyles = {
  backgroundColor: colorValues.backgroundColor,
  color: colorValues.textColor,
}

const textStyles = {
  color: colorValues.textColor,
}

  return (
    <>
      {theme === "dark" && (
        <div
        className="min-h-screen flex flex-col items-center justify-center gap-12 p-8"
        style={themeStyles}
        >
          <section className="w-full flex items-center justify-between">
            <div>
              <h2 style={textStyles} className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] font-black italic">
                People who
                <br/>
                value teamwork
              </h2>
              <MainButton buttonText="Get Started" icon={<ArrowRight />} className="text-sm sm:text-base md:text-base lg:text-lg" />
              {/* <SocialProof /> */}
            </div>
            <TileMosaic className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto" />
          </section>
        </div>
      )}

      {theme === "light" && (

        <div className="min-h-screen flex flex-col items-center justify-center gap-12 p-8"
        style={themeStyles}
        >

          <section className="w-full flex items-center justify-between">
            <div>
              <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] font-black text-gray-500 italic">
                People who
                <br/>
                value teamwork
              </h2>
              <MainButton buttonText="Get Started" className="text-sm sm:text-base md:text-base lg:text-lg" />
            </div>
            <TileMosaic className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto" />
          </section>

          {/* <section className="w-full max-w-md">
            <h2 className="mb-4 text-sm font-medium text-gray-500">
              Image masked by tile-02 + tile-05 + tile-08
            </h2>
            <ImageTileMask
              shapeIds={['tile-02', 'tile-05', 'tile-08']}
              src={heroImg}
              alt="Hero"
              className="w-full h-auto"
            />
          </section> */}
        </div>
      )}
    </>
  )
}

function App() {
  return (
    <>
      <Homepage />

    </>
  )
}

export default App
