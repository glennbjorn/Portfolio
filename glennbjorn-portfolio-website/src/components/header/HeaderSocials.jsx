import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="http://linkedin.com/in/glennbjorn" target="_blank"><BsLinkedin/></a>
      <a href="http://github.com/glennbjorn" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials