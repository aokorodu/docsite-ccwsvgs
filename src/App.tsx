import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import ContentLayout from './layouts/ContentLayout';
import Home from './pages/Home';

// Converted lesson pages
import Intro from './pages/lessons/Intro';
import Colors from './pages/lessons/Colors';
import Whatis from './pages/lessons/Whatis';
import Shapes from './pages/lessons/Shapes';
import Paths from './pages/lessons/Paths';
import Text from './pages/lessons/Text';
import PresentationAttributes from './pages/lessons/PresentationAttributes';
import Styles from './pages/lessons/Styles';
import Groups from './pages/lessons/Groups';
import Transforms from './pages/lessons/Transforms';
import Syntax from './pages/lessons/Syntax';
import ReusableUse from './pages/lessons/ReusableUse';
import ReusableDefs from './pages/lessons/ReusableDefs';
import ReusableMarkers from './pages/lessons/ReusableMarkers';
import ReusableGradients from './pages/lessons/ReusableGradients';
import ReusablePatterns from './pages/lessons/ReusablePatterns';
import ReusableClippath from './pages/lessons/ReusableClippath';
import ReusableMask from './pages/lessons/ReusableMask';
import ReusableFilter from './pages/lessons/ReusableFilter';
import DynamicChanging from './pages/lessons/DynamicChanging';
import DynamicGenerating from './pages/lessons/DynamicGenerating';
import DynamicDragging from './pages/lessons/DynamicDragging';

// Animation pages
import AnimationIntro from './pages/lessons/AnimationIntro';
import AnimationCSS from './pages/lessons/AnimationCSS';
import AnimationCSSII from './pages/lessons/AnimationCSSII';
import AnimationJavascript from './pages/lessons/AnimationJavascript';
import AnimationJavascriptII from './pages/lessons/AnimationJavascriptII';
import SmilAnimation from './pages/lessons/SmilAnimation';
import SmilAnimationII from './pages/lessons/SmilAnimationII';
import Sprites from './pages/lessons/Sprites';

// Matter.js pages
import MatterjsIntro from './pages/lessons/MatterjsIntro';
import MatterjsParticles from './pages/lessons/MatterjsParticles';
import MatterjsParticlesMultiple from './pages/lessons/MatterjsParticlesMultiple';
import MatterjsParticlesSquares from './pages/lessons/MatterjsParticlesSquares';
import MatterjsParticlesPolygons from './pages/lessons/MatterjsParticlesPolygons';
import MatterjsParticlesSvgbodies from './pages/lessons/MatterjsParticlesSvgbodies';
import MatterjsParticlesForces from './pages/lessons/MatterjsParticlesForces';

// GreenSock pages
import GreensockIntro from './pages/lessons/GreensockIntro';
import GreensockMethods from './pages/lessons/GreensockMethods';
import GreensockTimelines from './pages/lessons/GreensockTimelines';
import GreensockPlaybackControls from './pages/lessons/GreensockPlaybackControls';
import GreensockObjectProperties from './pages/lessons/GreensockObjectProperties';

// Other pages
import AspectRatio from './pages/lessons/AspectRatio';

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ContentLayout />}>
          {/* Converted pages */}
          <Route path="/intro" element={<Intro />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/whatis" element={<Whatis />} />
          <Route path="/shapes" element={<Shapes />} />
          <Route path="/paths" element={<Paths />} />
          <Route path="/text" element={<Text />} />
          <Route path="/presentation-attributes" element={<PresentationAttributes />} />
          <Route path="/styles" element={<Styles />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/transforms" element={<Transforms />} />
          <Route path="/syntax" element={<Syntax />} />
          <Route path="/reusable-use" element={<ReusableUse />} />
          <Route path="/reusable-defs" element={<ReusableDefs />} />
          <Route path="/reusable-markers" element={<ReusableMarkers />} />
          <Route path="/reusable-gradients" element={<ReusableGradients />} />
          <Route path="/reusable-patterns" element={<ReusablePatterns />} />
          <Route path="/reusable-clippath" element={<ReusableClippath />} />
          <Route path="/reusable-mask" element={<ReusableMask />} />

          <Route path="/reusable-filter" element={<ReusableFilter />} />

          {/* Dynamic Changes */}
          <Route path="/dynamic-changing" element={<DynamicChanging />} />
          <Route path="/dynamic-generating" element={<DynamicGenerating />} />
          <Route path="/dynamic-dragging" element={<DynamicDragging />} />

          {/* Animation */}
          <Route path="/animation-intro" element={<AnimationIntro />} />
          <Route path="/animation-css" element={<AnimationCSS />} />
          <Route path="/animation-css-II" element={<AnimationCSSII />} />
          <Route path="/animation-javascript" element={<AnimationJavascript />} />
          <Route path="/animation-javascript-II" element={<AnimationJavascriptII />} />
          <Route path="/smil-animation" element={<SmilAnimation />} />
          <Route path="/smil-animation-II" element={<SmilAnimationII />} />
          <Route path="/sprites" element={<Sprites />} />

          {/* Matter.js */}
          <Route path="/matterjs-intro" element={<MatterjsIntro />} />
          <Route path="/matterjs-particles" element={<MatterjsParticles />} />
          <Route path="/matterjs-particles-multiple" element={<MatterjsParticlesMultiple />} />
          <Route path="/matterjs-particles-squares" element={<MatterjsParticlesSquares />} />
          <Route path="/matterjs-particles-polygons" element={<MatterjsParticlesPolygons />} />
          <Route path="/matterjs-particles-svgbodies" element={<MatterjsParticlesSvgbodies />} />
          <Route path="/matterjs-particles-forces" element={<MatterjsParticlesForces />} />

          {/* GreenSock */}
          <Route path="/greensock-intro" element={<GreensockIntro />} />
          <Route path="/greensock-methods" element={<GreensockMethods />} />
          <Route path="/greensock-timelines" element={<GreensockTimelines />} />
          <Route path="/greensock-playback-controls" element={<GreensockPlaybackControls />} />
          <Route path="/greensock-object-properties" element={<GreensockObjectProperties />} />

          {/* Other */}
          <Route path="/aspect-ratio" element={<AspectRatio />} />
        </Route>
      </Routes>
    </RootLayout>
  );
}

export default App;
