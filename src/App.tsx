import Main from "./pages/Main";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
    </Routes>
  );
}

export default App;
