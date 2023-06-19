export interface Pokemon {
	id: number;
	name: string;
	url: string;
	base_experience: number;
	weight: number;
	species: {
		name: string;
		url: string;
	};
	sprites: {
		front_default: string;
		front_shiny: string;
	};
	forms: {
		name: string;
		url: string;
	}[];
	moves: {
		move: {
			name: string;
			url: string;
		};
	}[];
	stats: {
		stat: {
			name: string;
			url: string;
		};
		base_stat: number;
	}[];
}

export interface PokemonDeckState {
	pokemons: Pokemon[];
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
}
