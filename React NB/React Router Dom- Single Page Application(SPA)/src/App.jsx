import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

export default function App() {
  return (
		<>
    App.jsx
    			<BrowserRouter>
				<Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
			
      </Routes>
			</BrowserRouter>
		</>
	);
}