import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-shadow-amber-50'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis provident dolorem, harum doloribus rerum labore enim eos fugit rem libero ut quis temporibus illo maiores sit tempora iusto. Ratione perspiciatis animi natus cum blanditiis iste asperiores voluptates sed, repudiandae eligendi!</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flext flex-col gap-1 text-gray-600'>

                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
                <ul className='flext flex-col gap-1 text-gray-600'>
                    <li>+123-456-7890</li>
                    <li>contact@beyzuwai.com</li>
                </ul>
            </div>
            
        </div>
        <div>
                <hr />
                <p className='py-5 text-sm text-center'> Copyright 2024- All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer