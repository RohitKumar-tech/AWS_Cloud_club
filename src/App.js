import './App.css';
import AnimatedCursor from 'react-animated-cursor';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Events from './Routes/Events';
import Resources from './Routes/Resources';
import Gallery from './Routes/Gallery';
import About from './Routes/About';
import Join from './Routes/Join';

function App() {
  const isDesktop = window.matchMedia('(min-width: 768px)').matches;

  return (
    <div className="App">
      {isDesktop && (
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: '#fff',
          }}
          outerStyle={{
            border: '3px solid #fff',
          }}
        />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </div>
  );
}

export default App;
