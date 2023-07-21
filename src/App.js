import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
// DOG IMPORTS
import Home from './Components/Home';
import Error404 from './Components/Error404';
import Dog from "./Components/Dog";
// COLOR IMPORTS
import HomeColor from "./Components/HomeColors";
import ColorPage from "./Components/ColorPage";

function App() {
  return (
    <div className="App">
    {/* UNCOMMENT BELLOW TO GET COLOR PICKER ASSIGNMENT */}
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeColor />} />
            <Route exact path="/:color" element={<ColorPage/>}/>
            <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>


      {/* UNCOMMENT BELLOW TO GET DOG FINDER ASSIGNMENT */}
      {/* <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/dog/:name" element={<Dog/>}/>
            <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
