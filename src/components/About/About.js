import React from 'react';

const About = ({ name }) => {
	return (
		<section className="about" id="about">
			<h3>
				Namaste ! I'm {name} <i className="animated hover-rotate em em-raised_hand_with_fingers_splayed" />
			</h3>
			<div className="details">
				<div className="item text-muted">
					<p>
						I'm a software developer from India <i className="animated hover-bounce em-svg em-heart f-12" />
						I am a skilled Developer and a Startup Enthusiast, 
						capable of carrying end to end product development from design to deployment.
					</p>
			
				</div>
			</div>
		</section>
	);
};

export { About };
