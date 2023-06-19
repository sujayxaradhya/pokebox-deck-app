import { combineReducers } from "@reduxjs/toolkit";
import PokemonDeckReducer from "../features/pokemonDeck/pokemonDeckSlice";

const rootReducer = combineReducers({
	pokemonDeck: PokemonDeckReducer
});

export default rootReducer;
