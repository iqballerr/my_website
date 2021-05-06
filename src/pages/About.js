import React from 'react';
import {ListGroup, Button, Image} from 'react-bootstrap';
import '../components/WidthLimit.scss';

const About = () => {
	return <ListGroup>
    <div className="mx-lg-5 mr-3 ml-3 mb-5 d-flex flex-column align-items-center text-center">
    <Image alt="logo"
        width="120"
        height="150"
        src={`${process.env.PUBLIC_URL}/header.jpg`}
        className="mb-4"
        rounded
      />
      <h4 className="text-white mb-4">
        <strong>About Me...</strong>
      </h4>
      <h5 className="text-white mb-5 max-button">
        I am a Software Engineering student at University of California, Irvine. I spend most of my free time either coding, playing basketball, or watching Anime!
      </h5>
      <Button
        variant="outline-light"
        href={`${process.env.PUBLIC_URL}Iqbal Lodin Resume Spring 2021.pdf`}
        target="_blank"
        size="lg"
        download
      >My Resume
      </Button>
    </div>
  </ListGroup>;
};

export default About;
