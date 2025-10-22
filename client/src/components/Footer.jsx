import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      <img width={150} src={assets.logo} />
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @genify | All right reserved.</p>
      <div className='flex gap-2.5'>
        <img className='cursor-pointer' src={assets.facebook_icon} width={35} />
        <img className='cursor-pointer' src={assets.instagram_icon} width={35} />
        <img className='cursor-pointer' src={assets.twitter_icon} width={35} />
        <a href="https://github.com/msd131102" target="_blank" rel="noopener noreferrer">
          <img className='cursor-pointer' src={assets.github_icon} width={35} />
        </a>
      </div>
    </div>
  )
}

export default Footer
