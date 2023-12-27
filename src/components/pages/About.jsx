import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col items-center'>

      <div className='flex justify-between items-center h-10 w-full bg-gradient-to-tl from-green-900 via-green-700 to-green-800 mb-2 px-4'>
        <div className='font-bold'>WHOAMI</div>
        <div>
          <a className='px-1 hover:text-red-900' href="#about-contact-send-btn">Contact</a>
          <a className='px-2 hover:text-red-900' href="">Download</a>
        </div>
      </div>
      <div className='w-full flex flex-col-reverse md:flex-row items-center md:items-stretch  md:w-[80%]' >

        <div className='flex p-4 flex-col w-[95%] md:w-[40%] border border-blue-800 shadow-inner mt-6 md:mt-0 shadow-blue-800 '>
          <div className='text-xl text-blue-800'>Contact Me..</div>
          <div>
            <input className='my-2 w-full p-2 bg-blue-950 focus:outline-none' type="text" placeholder='Name' />
            <input className='my-2 w-full p-2 bg-blue-950 focus:outline-none' type="email" required placeholder='Email' />
            <textarea className='my-2 w-full p-2 bg-blue-950 focus:outline-none' name="about-contact-msg" id="about-contact-msg" cols="30" rows="10" placeholder='Shoot...'></textarea>
            <div className='w-full flex justify-end'><button id='about-contact-send-btn' className='bg-green-700 hover:bg-green-800 my-2 p-1 focus:outline-none w-20' >Send</button></div>
          </div>
          <div className='mt-4 flex flex-wrap'> 
            <a href='https://facebook.com' target='_blank' className="border border-blue-400 flex m-2 items-center justify-center my-1 p-1 focus:outline-none bg-blue-700 w-40 hover:bg-blue-800">Facebook</a>
          </div>

        </div>

        <div className='flex flex-col border-blue-400 w-full md:w-[60%] shadow-lg rounded shadow-blue-950' >

          <div className='border border-blue-800 rounded-b m-2'>
            <div className='w-full h-7 bg-gradient-to-tl px-4 from-cyan-900 via-blue-700 to-cyan-900 flex items-center font-bold'>Personal Details</div>
            <div className='p-1 text-sm'>
              <table>
                <tr>Kushagra Sharma</tr>
                <tr>Ashirwad Garden, Rest House Road, Rajgarh, Alwar</tr>
                <tr>TheDarkArtist@proton.me | +917426072284</tr>
                <tr>June 2, 2005</tr>
                <tr>thedarkartist.github.io</tr>
                <tr>LinkedIn TheDarkArtist</tr>
              </table>
            </div>
          </div>

          <div className='border border-blue-800 rounded-b m-2'> <div className='w-full h-7 bg-gradient-to-tl px-4 from-cyan-900 via-blue-700 to-cyan-900 flex items-center font-bold text-blue-200'>Objective</div>
            <div className='border-blue-400 p-1'>I'm a Passionate Problem solver, and Linux Whiz, </div>
          </div>
          <div className='border border-blue-800 rounded-b m-2'>
            <div className='w-full h-7 bg-gradient-to-tl px-4 from-cyan-900 via-blue-700 to-cyan-900 flex items-center font-bold'>Education</div>
            <div className='border-blue-400 p-1 text-sm'>
              <ul className='list-disc pl-4' >
                <div className='py-1' >
                  <li>10<span className='align-super' >th</span> Class <span className='pl-4'>78%</span> <span className="pl-4">2017-2018</span></li>
                  <p>Swami Ganga Bharti Sr. Sec. School, Rajgarh, Alwar</p>
                </div>

                <div className='py-1'>
                  <li>12<span className='align-super' >th</span> Class <span className='pl-4' >56%</span> <span className="pl-4">2019-2020</span></li>
                  <p>Swami Ganaga Bharti Sr. Sec. School, Rajgarh, Alwar</p>
                  <p>[+] JEE Mains Prep from Resonance, Jaipur</p>
                </div>

                <div className='py-1'>
                  <li>B.Tech <span className="pl-4">7.2CGPA (pursuing)</span> <span className="pl-4">2020-2024</span></li>
                  <p>Modern Institute of Technology & Research Center, Alwar, Rajasthan</p>
                </div>
              </ul>
            </div>
          </div>

          <div className='border border-blue-800 rounded-b m-2'>
            <div className='w-full h-7 bg-gradient-to-tl px-4 from-cyan-900 via-blue-700 to-cyan-900 flex items-center font-bold'>Experience</div>
            <div className='border-blue-400 p-1'>I'm a Passionate Problem solver, and Linux Whiz, </div>
          </div>


          <div className='border border-blue-800 rounded-b m-2'>
            <div className='w-full h-7 bg-gradient-to-tl px-4 from-cyan-900 via-blue-700 to-cyan-900 flex items-center font-bold'>Skills</div>
            <div className='border-blue-400 p-1'>I'm a Passionate Problem solver, and Linux Whiz, </div>
          </div>

          <div className='border border-blue-800 rounded-b m-2'>
            <div className='w-full h-7 bg-gradient-to-tl px-4 from-cyan-900 via-blue-700 to-cyan-900 flex items-center font-bold'>Interests</div>
            <div className='border-blue-400 p-1'>I'm a Passionate Problem solver, and Linux Whiz, </div>
          </div>

          <div className='border border-blue-800 rounded-b m-2'>
            <div className='w-full h-7 bg-gradient-to-tl px-4 from-cyan-900 via-blue-700 to-cyan-900 flex items-center font-bold'>Achievements & Certs</div>
            <div className='border-blue-400 p-1'>I'm a Passionate Problem solver, and Linux Whiz, </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default About
