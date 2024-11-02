import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

function App() {
	const pokemonList = [
		// j'ai modifier le nom de mon tableau pour correspondre à la quête parce que sinon mes correcteurs/trices vont me dire que j'ai des notions à revoir encore :/
		{
			name: "Bulbasaur",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
		},
		{
			name: "Charamander",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
		},
		{
			name: "Squirtle",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
		},
		{
			name: "Pikachu",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
		},
		{
			name: "mew",
		},
	];

	const [pokemonIndex, setPokemonIndex] = useState(0); // state
	const handlePrevIndex = () => {
		setPokemonIndex(pokemonIndex - 1);
	};
	const handleNextIndex = () => {
		setPokemonIndex(pokemonIndex + 1);
	};
	return (
		<>
			<PokemonCard pokemonData={pokemonList[pokemonIndex]} />
			<button
				type="button"
				onClick={handlePrevIndex}
				disabled={pokemonIndex === 0}
			>
				Précédant
			</button>
			<button
				type="button"
				onClick={handleNextIndex}
				disabled={pokemonIndex === pokemonList.length - 1}
			>
				Suivant
			</button>
		</>
	);
}

export default App;
