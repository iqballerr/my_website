import React from 'react';
import {ListGroup, Image } from 'react-bootstrap';
import LinkButton from './LinkButton';

const LinkList = () => {
  const links = [
    'https://github.com/iqballerr',
    'https://www.linkedin.com/in/iqbal-lodin/',
    'https://www.instagram.com/iqballerr/',
    'https://twitter.com/iqballerr',
    'https://www.youtube.com/channel/UC0Dd_ZNRayMi5MZzddrUpoA'
  ]
	return <ListGroup>
    <div className="mx-lg-5 mr-3 ml-3 d-flex flex-column align-items-center">
      <Image alt="logo"
        width="120"
        height="150"
        src={`${process.env.PUBLIC_URL}/header.jpg`}
        className="mb-4"
        rounded
      />
      <h5 className="mb-4 text-white">@iqballerr</h5>
      {links.map((link)=>(
        <LinkButton key={links} link={link}/>
      ))}
    </div>
  </ListGroup>;
};

export default LinkList;
