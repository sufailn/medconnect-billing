// components/SocialIcons.js
import { 
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaLinkedinIn
  } from 'react-icons/fa';
  import { BiLogoGmail } from "react-icons/bi";
  export function FacebookIcon(props) {
    return <FaFacebookF {...props} />;
  }
  
  export function TwitterIcon(props) {
    return <FaTwitter {...props} />;
  }
  
  export function YoutubeIcon(props) {
    return <FaYoutube {...props} />;
  }
  
  export function LinkedinIcon(props) {
    return <FaLinkedinIn {...props} />;
  }
  export function GmailIcon(props) {
    return <BiLogoGmail   {...props} />;
  }