//routes
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// layout

import AppLayout from "./layouts/AppLayout";

//pages

import ViewerPage from "./pages/ViewerPage";
import CasesPage from "./pages/CasesPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<ViewerPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
