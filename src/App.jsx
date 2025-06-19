import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import { DarkModeProvider } from "./contexts/DarkModeContext";

function App() {
  return (
    <BrowserRouter>
      <DarkModeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </DarkModeProvider>
    </BrowserRouter>
  );
}

export default App;
