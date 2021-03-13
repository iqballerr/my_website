import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {Icon} from '@iconify/react';
import youtubeIcon from '@iconify/icons-simple-icons/youtube';
import instagramIcon from '@iconify-icons/simple-icons/instagram';
import twitterIcon from '@iconify-icons/simple-icons/twitter';
import githubIcon from '@iconify-icons/simple-icons/github';
import linkedinIcon from '@iconify-icons/simple-icons/linkedin';
import './WidthLimit.scss'



const LinkButton = (props) => {
  const [icon, setIcon] = useState('')
  useEffect(()=>{
    if(props.link.includes('youtube')){
      setIcon(<Icon icon={youtubeIcon}/>);
    } else if (props.link.includes('instagram')) {
      setIcon(<Icon icon={instagramIcon}/>);
    } else if (props.link.includes('twitter')) {
      setIcon(<Icon icon={twitterIcon}/>);
    } else if (props.link.includes('github')) {
      setIcon(<Icon icon={githubIcon}/>);
    } else if (props.link.includes('linkedin')) {
      setIcon(<Icon icon={linkedinIcon}/>);
    }
  }, [props]);
	return (
  <Button
  variant="outline-light"
  href={props.link}
  target="_blank"
  className="mb-3 max-button"
  size="lg"
  block
  >
    {icon}
  </Button>
  );
};

export default LinkButton;
