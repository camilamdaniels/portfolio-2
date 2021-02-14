import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
	render() {
		return(
			<div>
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
						<img src="https://image.flaticon.com/icons/svg/190/190279.svg" alt="pic of planet"/>
					</div>
				</section>

				<section id="portfolio">
					<h3>Some of my Projects</h3>
					<div className="projects grid">
						<a href="https://camilamdaniels.github.io/react-ultimate-tictactoe/">
							<img src="https://image.flaticon.com/icons/svg/190/190283.svg" alt="img" />
							<h4>Interstellar Tic Tac Toe</h4>
						</a>
						<a href="https://camilamdaniels.github.io/react-blackjack/">
							<img src="https://image.flaticon.com/icons/svg/190/190288.svg" alt="img" />
							<h4>Planet Boy's Blackjack</h4>
						</a>
						<a href="https://camilamdaniels.github.io/todo2/">
							<img src="https://image.flaticon.com/icons/svg/190/190278.svg" alt="img" />
							<h4>Captain Cosmo's TodoList</h4>
						</a>
						<a href="https://whispering-oasis-83844.herokuapp.com/">
							<img src="https://image.flaticon.com/icons/svg/190/190275.svg" alt="img" />
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
							<img src="https://image.flaticon.com/icons/svg/2647/2647400.svg" alt="comet"/>
							<h4>JavaScript</h4>
						</li>
						<li>
							<img src="https://image.flaticon.com/icons/svg/2534/2534248.svg" alt="comet"/>
							<h4>React</h4>
						</li>
						<li>
							<img src="https://image.flaticon.com/icons/svg/2909/2909923.svg" alt="comet"/>
							<h4>Express</h4>
						</li>
						<li>
							<img src="https://image.flaticon.com/icons/svg/3419/3419291.svg" alt="comet"/>
							<h4>Java</h4>
						</li>
					</ul>
				</section>

				<section id="contact">
					<h3>Get In Touch</h3>
					<p className="leading">If you are interested in learning more, send a message!</p>
					<form>
						<input type="text" placeholder="NAME"/>
						<input type="email" placeholder="EMAIL"/>
						<textarea placeholder="YOUR MESSAGE"></textarea>
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