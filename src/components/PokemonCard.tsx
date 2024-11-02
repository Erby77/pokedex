interface PokemonCardProps {
	pokemonData: {
		imgSrc?: string; // ici "?" signifie "optionnel"
		name: string;
	};
}

const PokemonCard = ({ pokemonData }: PokemonCardProps) => {
	return (
		<figure>
			{pokemonData.imgSrc !== undefined ? (
				<img src={pokemonData.imgSrc} alt={pokemonData.name} />
			) : (
				<p>???</p>
			)}
			<h1>{pokemonData.name}</h1>
		</figure>
	);
};

export default PokemonCard;
