import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
	return (
		<>
			<h1 className={styles.aboutTitle}>About PokéBox</h1>
			<section className={styles.aboutContainer}>
				<div className={styles.aboutMain}>
					<p className={styles.aboutText}>
						Welcome to PokéBox Deck, a web application created for all Pokémon
						enthusiasts. PokéBox Deck allows you to explore a collection of
						Pokémon cards which display various details about each Pokémon.
					</p>
				</div>

				<div className={styles.aboutFeatures}>
					<h2>Features</h2>
					<p className={styles.aboutText}>
						{" "}
						<strong>Interactive Cards:</strong> Each card represents a Pokémon
						and is designed to be visually appealing and informative.
					</p>
					<p className={styles.aboutText}>
						{" "}
						<strong>Detailed Information:</strong> The cards show a wealth of
						information about each Pokémon including their name, image, species,
						experience, weight, attack, moves, and forms.
					</p>
					<p className={styles.aboutText}>
						{" "}
						<strong>Pokémon Moves:</strong> Each card also showcases three of
						the Pokémon's moves. This information is particularly useful for
						players and collectors.
					</p>
				</div>

				<div className={styles.aboutTechStack}>
					<h2>Technology Stack</h2>
					<p className={styles.aboutText}>
						PokéBox Deck is built using React and TypeScript, a popular
						JavaScript library for building user interfaces. It also utilizes
						Redux for state management, Vite for development and tooling.
					</p>
				</div>

				<div className={styles.aboutCreator}>
					<h2>About the Creator</h2>
					<p className={styles.aboutText}>
						PokéBox Deck is crafted with ❤️ by Sujay Shukla, a Computer Science
						Engineer, Full Stack Developer, IoT (Internet of Things) Developer,
						Designer, Data Scientist, and AI/ML (Artificial Intelligence/Machine
						Learning) enthusiast. He is known as{" "}
						<strong>
							<a
								href="https://twitter.com/youngmoguler"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.textLink}
							>
								@youngmoguler
							</a>
						</strong>{" "}
						on Twitter. Also, you can find him on Linkedin{" "}
						<strong>
							<a
								href="http://linkedin.com/in/sujayshuklaa"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.textLink}
							>
								Sujay Shukla
							</a>
						</strong>
					</p>
				</div>

				<div className={styles.aboutContribute}>
					<h2>Contribute</h2>
					<p className={styles.aboutText}>
						If you're interested in contributing to the development of PokéBox
						Deck, please feel free to submit issues or pull requests on the
						GitHub repository.
					</p>
				</div>
			</section>
		</>
	);
};

export default About;
