import { Routes, Route } from "react-router-dom"
import { GlobalStyles } from "./Globalstyles";
//layouts
import { HomePage } from "./pages/Homepage";
function App() {


  return (
    <>
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    </>
  )
}

export default App
