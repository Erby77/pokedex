interface Pokemon {
	id: number;
	imgSrc?: string; // ici "?" signifie "optionnel"
	name: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void; // ici "void" veut dire que la fonction fait quelque chose mais ne renvoie rien
	pokemonData: Pokemon[]; // pokemonData est mainenant typé comme étant un tableau de l'objet Pokemon contenant à son tour une image et un nom
}

const NavBar = ({ setPokemonIndex, pokemonData }: NavBarProps) => {
	const handleClick = (element: Pokemon) => {
		if (element.name === "Pikachu") {
			alert("pika pikachu");
		}
		setPokemonIndex(element.id);
	};

	return (
		<>
			{pokemonData.map((pokemon) => (
				<button
					type="button"
					onClick={() => handleClick(pokemon)}
					key={pokemon.id}
				>
					{pokemon.name}
				</button>
			))}
		</>
	);
};

export default NavBar;
