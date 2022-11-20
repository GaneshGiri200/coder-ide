import { BrowserRouter, BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Error404 from "./Modules/erro404/Error404";
import HomeModule from "./Modules/home/HomeModule";
import Playground from "./Modules/playground/Playground";
import { GlobalStyle } from "./style/Global";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<HomeModule/>}/>
        <Route path="/playground" element={<Playground/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
