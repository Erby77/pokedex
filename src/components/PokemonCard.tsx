const PokemonCard = () => {
	const pokemon = [
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
			name: "mew",
		},
	];

	return (
		<figure>
			{pokemon[0].imgSrc !== undefined ? (
				<img src={pokemon[0].imgSrc} alt={pokemon[0].name} />
			) : (
				<p>???</p>
			)}
			<h1>{pokemon[0].name}</h1>
		</figure>
	);
};

export default PokemonCard;
