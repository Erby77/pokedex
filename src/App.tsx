import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
	const pokemonList = [
		// ce tableau restera pokemonList
		{
			id: 0,
			name: "Bulbasaur",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
		},
		{
			id: 1,
			name: "Charamander",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
		},
		{
			id: 2,
			name: "Squirtle",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
		},
		{
			id: 3,
			name: "Pikachu",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
		},
		{
			id: 4,
			name: "mew",
		},
	];
	// Fonction de re-rendu de la page avec un useState
	const [pokemonIndex, setPokemonIndex] = useState(0);
	return (
		<>
			<NavBar
				pokemonIndex={pokemonIndex}
				setPokemonIndex={setPokemonIndex}
				pokemonData={pokemonList}
			/>
			<PokemonCard pokemonData={pokemonList[pokemonIndex]} />
		</>
	);
}

export default App;
