import MainHeader from "./components/MainHeader";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Info from "./components/Info";

{
  /* <Main />; */
}
function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Info" element={<Info />}></Route>
      </Routes>
    </>
  );
}

export default App;
