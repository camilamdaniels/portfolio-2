import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
	render() {
		return(
			<div>
				<head>
					<script src="https://kit.fontawesome.com/1d58223e8c.js" crossorigin="anonymous"></script>
				</head>
				<nav className="site-nav grid">
					<h1>Camila Daniels</h1>
					<ul>
						<li><a href="#portfolio"></a></li>
						<li><a href="#skills"></a></li>
						<li><a href="#contact"></a></li>
					</ul>
				</nav>

				<section id="welcome" className="grid">
					<div className="welcome-text">
						<h2>Space Enthusiast<br />& JavaScript Developer</h2>
						<p className="leading">
							Hi! I'm Camila, a Software Engineer with a B.A. in Applied Math from Barnard College of Columbia University.
						</p>
						<a href="#portfolio" className="button">View my work</a>
					</div>
					<div className="welcome-img">
						<FontAwesomeIcon icon="fa-solid fa-solar-system" />
				</section>

				<section id="portfolio">
					<h3>Some of my Projects</h3>
					<div className="projects grid">
						<a href="https://ultimate-tic-tac.herokuapp.com/">
							<FontAwesomeIcon icon="fa-solid fa-planet-ringed" />
							<h4>Interstellar Tic Tac Toe</h4>
						</a>
						<a href="https://camilamdaniels.github.io/react-blackjack/">
							
							<h4>Planet Boy's Blackjack</h4>
						</a>
						<a href="https://camilamdaniels.github.io/todo2/">
							<FontAwesomeIcon icon="fa-solid fa-comet" />
							<h4>Captain Cosmo's TodoList</h4>
						</a>
						<a href="https://whispering-oasis-83844.herokuapp.com/">
							<FontAwesomeIcon icon="fa-solid fa-ufo" />
							<h4>My Alien Wallet</h4>
						</a>
					</div>
				</section>

				<section id="skills">
					<h3>
						Things I Can Do
					</h3>

					<ul className="grid">
						<li>
							<FontAwesomeIcon icon="fa-solid fa-radar" />
							<h4>JavaScript</h4>
						</li>
						<li>
							<FontAwesomeIcon icon="fa-solid fa-rocket-launch" />
							<h4>React</h4>
						</li>
						<li>
							<FontAwesomeIcon icon="fa-solid fa-alien-8bit" />
							<h4>Express</h4>
						</li>
						<li>
							<FontAwesomeIcon icon="fa-solid fa-atom-simple" />
							<h4>Java</h4>
						</li>
					</ul>
				</section>

				<section id="contact">
					<h3>Get In Touch</h3>
					<p className="leading">If you are interested in learning more, send a message!</p>
					<form
						action="https://formspree.io/f/xqkgobvp"
						method="POST"
					>
						<input type="text" placeholder="NAME"/>
						<input type="email" placeholder="EMAIL" name="_replyto"/>
						<textarea placeholder="YOUR MESSAGE" name="message"></textarea>
						<button className="button">Send Flare</button>
					</form>
				</section>

				<footer>
					<div className="grid">
						<p className="copyright">Copyright 2021 Cosmo Junkie</p>
						<ul className="social">
							<li>
								<a href="#">
									<img src="https://raw.githubusercontent.com/iamshaunjp/responsive-css-grid-build/847f0a24fecf4aba7cd205a09b7a52b7924766cf/assets/icon_fb.svg" alt="facebook"/>
								</a>
							</li>
							<li>
								<a href="#">
									<img src="https://raw.githubusercontent.com/iamshaunjp/responsive-css-grid-build/847f0a24fecf4aba7cd205a09b7a52b7924766cf/assets/icon_tw.svg" alt="twitter"/>
								</a>
							</li>
						</ul>
					</div>
				</footer>
			</div>
		)
	}
}

export default Portfolio;