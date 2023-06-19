import React, { useState, useEffect, useMemo, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchPokemonDeck } from "../../features/pokemonDeck/pokemonDeckSlice";
import { RootState } from "../../app/store";
import PokemonCard from "../PokemonCard/PokemonCard";
import { Pokemon } from "../../features/pokemonDeck/pokemonDeckTypes";
import PokeballLoader from "../Pokeball Preloader/PokeballLoader";
import styles from "./PokemonDeck.module.css";

const capitalizeFirstLetter = (str: string) =>
	str.charAt(0).toUpperCase() + str.slice(1);

const PokemonDeck: React.FC = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const { pokemons, status } = useAppSelector(
		(state: RootState) => state.pokemonDeck
	);

	const [shouldRestoreScroll, setShouldRestoreScroll] = useState(false);
	const scrollYPosition = useRef(0);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchPokemonDeck(0));
		}
	}, [status, dispatch]);

	useEffect(() => {
		const handleScroll = () => {
			if (
				window.innerHeight + window.scrollY >=
					document.documentElement.scrollHeight - 50 &&
				status === "succeeded"
			) {
				scrollYPosition.current = window.scrollY;
				dispatch(fetchPokemonDeck(pokemons.length));
				setShouldRestoreScroll(true);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [dispatch, pokemons.length, status]);

	useEffect(() => {
		if (shouldRestoreScroll && status === "succeeded") {
			window.scrollTo(0, scrollYPosition.current);
			setShouldRestoreScroll(false);
		}
	}, [shouldRestoreScroll, status]);

	const content = useMemo(() => {
		if (status === "loading") {
			return <PokeballLoader />;
		}

		if (status === "succeeded") {
			return (
				<div className={styles.grid}>
					{pokemons.map((pokemon: Pokemon) => (
						<PokemonCard
							key={pokemon.id}
							name={capitalizeFirstLetter(pokemon.name)}
							sprite={pokemon.sprites.front_default}
							species={capitalizeFirstLetter(pokemon.species.name)}
							weight={pokemon.weight}
							experience={pokemon.base_experience}
							attack={pokemon.stats[1].base_stat}
							forms={pokemon.forms.map((formObj) => formObj.name)}
							moves={pokemon.moves
								.slice(0, 3)
								.map((moveObj) => capitalizeFirstLetter(moveObj.move.name))}
						/>
					))}
				</div>
			);
		}

		if (status === "failed") {
			return <div>Error loading Pokémons</div>;
		}

		return null;
	}, [status, pokemons]);

	return <div className={styles.container}>{content}</div>;
};

export default PokemonDeck;
