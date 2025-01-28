import { Container } from 'react-bootstrap';
import avatar from './images/Avatar.png';

const AboutMe = () => {
	const styles = {
		heading: {
			fontSize: '6rem',
		},
	};
	return (
		<>
			<Container>
				<p>Welcome!</p>
				<h2 style={styles.heading} className='fw-bold'>
					Margaux Glovier
				</h2>
				<h3 className='fw-bold'>Full Stack Web Developer</h3>
				<p>
					Experienced full stack web developer, delivering combined front and
					back end applications. <br />
					Completed UCF Full Stack Web Development certification.
				</p>
			</Container>
		</>
	);
};

export default AboutMe;