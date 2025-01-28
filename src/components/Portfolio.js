import { Row, Col, Container } from 'react-bootstrap';

import PortfolioCard from './Portfolio-Card';

const Portfolio = () => {
	const portfolioWork = [
		{
			title: 'Weather App',
			img: 'https://github.com/mglo196/module-9-challenge/blob/main/Weather%20Dashboard.png',
			description: 'Weather App - Find weather for given cities.',
			url: 'https://module-9-challenge-62j9.onrender.com/',
		},
		{
			title: 'README generator',
			img: 'https://user-images.githubusercontent.com/84214872/139641887-3ccb90ae-68fa-44a3-9434-19e1fe972384.png',
			description: 'README generator - Creates personalized READMEs',
			url: 'https://github.com/mglo196/module-7-challenge',
		},
		{
			title: 'Engine Base',
			img: 'https://www.autoremarketing.com/wp-content/uploads/2019/09/motorcloud.png',
			description: 'Car Database to Buy and Sell Cars',
			url: ' https://enginebase-project2.onrender.com',
		},
	];

	const styles = {
		heading: {
			fontSize: '4rem',
			textAlign: 'center',
		},
	};

	return (
		<>
		 <h2 style={styles.heading}>Portfolio</h2>
      <Container>
        <Row>
          {portfolioWork.map((item, index) => (
            <Col lg={4} key={index} className='d-flex mx-auto'>
              <PortfolioCard
                title={item.title}
                img={item.img}
                description={item.description}
                url={item.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Portfolio; 
