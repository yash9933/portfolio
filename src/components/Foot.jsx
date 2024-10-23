import React from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Foot = () => {
  return (
    <footer className="flex justify-center items-center h-20 bg-transparent text-white gap-10">
          <a href="https://www.linkedin.com/in/9yash/" className="mx-2" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={26} />
          </a>
          <a href="https://twitter.com/yashh_dev" className="mx-2" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={26} />
          </a>
          <a href="https://github.com/yash9933" className="mx-2" target="_blank" rel="noopener noreferrer">
            <FaGithub size={26} color='white' />
          </a>
          {/* <a href="https://leetcode.com/EliteYash/" className="mx-2" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={26} />
          </a> */}
    </footer>
  )
}

export default Foot;