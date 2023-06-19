import React from "react";
import styles from "./PokemonCard.module.css";

interface Props {
	name: string;
	sprite: string;
	species: string;
	experience: number;
	weight: number;
	forms: string[];
	moves: string[];
	attack: number;
}

const PokemonCard: React.FC<Props> = ({
	name,
	sprite,
	species,
	experience,
	weight,
	forms,
	moves,
	attack
}) => {
	return (
		<div className={styles.card}>
			<img src={sprite} width={100} alt={name} />
			<h3 className="card-title">{name}</h3>
			<div className="card-info">
				<p>
					<strong>Species:</strong> <span>{species}</span>
				</p>
				<p>
					<strong>Weight:</strong> <span>{`${weight / 10} kg`}</span>
				</p>
				<p>
					<strong>Experience:</strong> <span>{experience}</span>
				</p>
				<p>
					<strong>Attack:</strong> <span>{attack}</span>
				</p>
				<p>
					<strong>Forms:</strong> <span>{forms.join(", ")}</span>
				</p>
				<p>
					<strong>Moves:</strong> <span>{moves.join(", ")}</span>
				</p>
			</div>
		</div>
	);
};

export default PokemonCard;
