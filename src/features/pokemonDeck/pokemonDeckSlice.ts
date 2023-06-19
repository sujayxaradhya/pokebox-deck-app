import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getPokemons } from "../../api/pokemonAPI";
import { Pokemon, PokemonDeckState } from "./pokemonDeckTypes";

const initialState: PokemonDeckState = {
	pokemons: [],
	status: "idle",
	error: null
};

export const fetchPokemonDeck = createAsyncThunk<Pokemon[], number>(
	"pokemonDeck/fetchPokemonDeck",
	async (offset = 0, { rejectWithValue }) => {
		try {
			const pokemonPromises = Array.from({ length: 20 }, (_, index) =>
				getPokemons(index + 1 + offset)
			);
			const pokemons = await Promise.all(pokemonPromises);
			return pokemons;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

const pokemonDeckSlice = createSlice({
	name: "pokemonDeck",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchPokemonDeck.pending, (state) => {
			state.status = "loading";
		}),
			builder.addCase(
				fetchPokemonDeck.fulfilled,
				(state, action: PayloadAction<Pokemon[]>) => {
					state.status = "succeeded";

					// Filter out any Pokemon that are already in the state
					const uniquePokemons = action.payload.filter(
						(pokemon) =>
							!state.pokemons.some(
								(existingPokemon) => existingPokemon.id === pokemon.id
							)
					);

					// Concatenate the unique Pokemons
					state.pokemons = state.pokemons.concat(uniquePokemons);
				}
			);
		builder.addCase(fetchPokemonDeck.rejected, (state, action) => {
			state.status = "failed";
			state.error = action.error.message || null;
		});
	}
});

export default pokemonDeckSlice.reducer;
