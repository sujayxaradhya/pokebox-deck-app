import React from "react";
import LenisScroll from "./utils/scroll";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonDeck from "./components/PokemonDeck/PokemonDeck";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";

const App: React.FC = () => {
	const container = document.querySelector(".App");

	if (container) {
		LenisScroll?.scrollTo(container);
	}

	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/about" element={<About />} />
					<Route
						path="/"
						element={
							<section className=".app-content">
								<PokemonDeck />
							</section>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
