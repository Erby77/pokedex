interface Pokemon {
	imgSrc?: string; // ici "?" signifie "optionnel"
	name: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void; // ici "void" veut dire que la fonction fait quelque chose mais ne renvoie rien
	pokemonData: Pokemon[];
}

const NavBar = ({
	pokemonIndex,
	setPokemonIndex,
	pokemonData,
}: NavBarProps) => {
	const handlePrevIndex = () => {
		setPokemonIndex(pokemonIndex - 1);
	};
	const handleNextIndex = () => {
		setPokemonIndex(pokemonIndex + 1);
	};

	return (
		<>
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
				disabled={pokemonIndex === pokemonData.length - 1}
			>
				Suivant
			</button>
		</>
	);
};

export default NavBar;
