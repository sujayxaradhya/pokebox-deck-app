import axios from "axios";
import { Pokemon } from "../features/pokemonDeck/pokemonDeckTypes";

const baseUrl = "https://pokeapi.co/api/v2";

export const getPokemons = async (id: number): Promise<Pokemon> => {
	try {
		const response = await axios.get(`${baseUrl}/pokemon/${id}`);

		// Extract and return only desired properties from the response
		const pokemon: Pokemon = {
			id: id,
			url: response.data.url,
			name: response.data.name,
			base_experience: response.data.base_experience,
			weight: response.data.weight,
			species: response.data.species,
			sprites: response.data.sprites,
			forms: response.data.forms,
			moves: response.data.moves,
			stats: response.data.stats
		};

		return pokemon;
	} catch (error) {
		console.error(error);
		throw new Error("Failed to fetch Pokemon");
	}
};
