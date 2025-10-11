import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>

        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae culpa consequuntur at quaerat pariatur, possimus obcaecati exercitationem magnam autem ipsa debitis. Vero, saepe dolore repellat sequi vel vitae distinctio corporis, temporibus nihil, dolorum consectetur sit officiis ad quo cumque.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo beatae quisquam quos ipsam illum reiciendis, officiis repudiandae quo quas commodi tempora dicta molestias vero ab vel aperiam earum non animi nemo maxime iste vitae culpa fugit. Minus ut iste quidem recusandae nulla itaque assumenda magni?</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores suscipit eveniet placeat! Sed soluta doloremque deserunt sequi minus alias maiores voluptate iste? Recusandae voluptatem obcaecati aut illo amet mollitia at sit, dolores perspiciatis voluptatibus ducimus expedita.</p>
          </div>

        </div>
        <div className='text-4xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>

        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda doloribus perferendis id saepe provident enim odit unde.</p>


          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience:</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat deserunt esse! Quidem suscipit expedita quisquam esse fugiat cumque cum!</p>


          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional Customer Service:</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat deserunt esse! Quidem suscipit expedita quisquam esse fugiat cumque cum!</p>


          </div>

        </div>
        <NewsLetterBox/>
    </div>

   
  )
}

export default About