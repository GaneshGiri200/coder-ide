import { BrowserRouter, BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Error404 from "./Modules/erro404/Error404";
import HomeModule from "./Modules/home/HomeModule";
import Environment from "./Modules/environment/Environment";
import { GlobalStyle } from "./style/Global";
import ModalProvider from "./shared-components/contex/ModelContex";
import EnvironementProvider from "./shared-components/contex/EnvironemntContext";

function App() {
  return (
    <EnvironementProvider>
      <ModalProvider>
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
          <Route path="/" element={<HomeModule/>}/>
          <Route path="/playground" element={<Environment/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </ModalProvider>
    </EnvironementProvider>
  );
}

export default App;
