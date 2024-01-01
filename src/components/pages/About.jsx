import React, {useEffect, useState, useRef} from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import { db } from '../../services/Firebase';

const About = () => {

  const skills = [
    ['Languages', 'Frameworks', 'Personal',],
    ['python', 'django', 'Problem-Solving'],
    ['javascript', 'react.js', 'Strategic Thinker'],
    ['rust', 'flask', 'Detail-Oriented'],
    ['dart', 'flutter','Resourcefull'],
    ['typescript','TailwindCSS','Collaborative'],
    ['C','Bootstrap',''],
    ['SQL','Firebase',''],
  ]

  const nameRef = useRef();
  const emailRef = useRef();
  const msgRef = useRef();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
    const docRef = addDoc(collection(db, 'messages'),{
        name: nameRef.current.value,
        email: emailRef.current.value,
        msg: msgRef.current.value,
        createdAt: serverTimestamp(),
      });
      nameRef.current.value = '';
      emailRef.current.value = '';
      msgRef.current.value = '';
      alert('message sent!');
    }catch(error){
     console.log('Error on message submit ::==> ', error);  
    }
  }

  return (
    <div className='flex flex-col items-center'>

      <div className='flex justify-between items-center h-10 w-full bg-gradient-to-tl from-green-900 via-green-700 to-green-800 mb-2 px-4'>
        <div className='font-bold'>WHOAMI</div>
        <div>
          <a className='px-1 hover:text-red-900' href="#about-contact-send-btn">Contact</a>
          <a className='px-2 hover:text-red-900' href="">Download</a>
        </div>
      </div>
      <div className='w-full flex flex-col-reverse md:flex-row items-center md:items-stretch  lg:w-[80%]' >

        <div className='flex p-4 flex-col w-[95%] md:w-[40%] border border-blue-800 shadow-md mt-6 md:mt-0 shadow-blue-800 '>
          <div className='text-xl font-bold text-blue-700'>Contact Me..</div>
          <div>
            <form onSubmit={handleSubmit} >
            <input ref={nameRef} className='my-2 w-full p-2 bg-blue-200 dark:bg-blue-950 border border-blue-600 focus:outline-none' type="text" placeholder='Name' />
            <input ref={emailRef} className='my-2 w-full p-2 bg-blue-200 dark:bg-blue-950 focus:outline-none border border-blue-600' type="email" required placeholder='Email' />
            <textarea ref={msgRef}  className='my-2 w-full p-2 bg-blue-200 dark:bg-blue-950 focus:outline-none border border-blue-600' name="about-contact-msg" id="about-contact-msg" cols="30" rows="10" placeholder='Shoot...'></textarea>
            <div className='w-full flex justify-end'><button id='about-contact-send-btn' className='bg-green-700 hover:bg-green-800 my-2 p-1 focus:outline-none w-20 text-green-200' >Send</button></div>
            </form>
          </div>
          <div className='mt-4 flex flex-wrap'>
            <a href='https://facebook.com' target='_blank' className="border border-blue-400 flex m-2 items-center justify-center my-1 p-1 focus:outline-none bg-blue-700 w-40 hover:bg-blue-800 text-blue-200">Facebook</a>
          </div>

        </div>

        <div className='flex flex-col border-blue-400 w-full md:w-[60%] rounded shadow-lg shadow-blue-950' >

          <div className='border border-blue-800 rounded-b m-2'>
            <div className='w-full h-7 bg-gradient-to-tl px-4 from-cyan-900 via-blue-700 to-cyan-900 flex items-center font-bold text-blue-200'>Personal Details</div>
            <div className='p-2 text-sm'>
              <div>Kushagra Sharma</div>
              <div>Ashirwad Garden, Rest House Road, Rajgarh, Alwar</div>
              <div>TheDarkArtist@proton.me | +917426072284</div>
              <div>June 2, 2005</div>
              <div>thedarkartist.github.io</div>
              <div>LinkedIn TheDarkArtist</div>
            </div>
          </div>

          <div className='border border-blue-800 rounded-b m-2'> <div className='w-full h-7 bg-gradient-to-tl px-4 from-cyan-900 via-blue-700 to-cyan-900 flex items-center font-bold text-blue-200'>Objective</div>
            <div className='border-blue-400 p-2'>
              On a quest for perfection in the digital realm, I'm geared up to collaborate with brilliant minds. Eager to architect, design, and breathe life into software, my journey is fueled by a commitment to continuous learning. With a hunger for mastering new technologies, I bring a deep understanding of cyber security, ensuring that our innovative solutions not only push boundaries but also stand as fortresses against digital threats. Let's make coding dreams a pixel-perfect reality while prioritizing the utmost integrity and resilience in our cyber defenses. Ready to dive into the world of endless possibilities!</div>
          </div>
          <div className='border border-blue-800 rounded-b m-2'>
            <div className='w-full h-7 bg-gradient-to-tl px-4 from-cyan-900 via-blue-700 to-cyan-900 flex items-center font-bold text-blue-200'>Education</div>
            <div className='border-blue-400 p-2 text-sm'>
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
            <div className='w-full h-7 bg-gradient-to-tl px-4 from-cyan-900 via-blue-700 to-cyan-900 flex items-center font-bold text-blue-200'>Experience</div>
            <div className='border-blue-400 p-1'> Student </div>
          </div>


          <div className='border border-blue-800 rounded-b m-2'>
            <div className='w-full h-7 bg-gradient-to-tl px-4 from-cyan-900 via-blue-700 to-cyan-900 flex items-center font-bold text-blue-200'>Skills</div>
            <div className='border-blue-400 p-2 overflow-x-scroll '>
              <table>
                <thead>
                  <tr >
                    {skills[0].map((header, index) => (
                      <th className='px-2 border-l border-b' key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {skills.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td className='px-2 border-l' key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className='border border-blue-800 rounded-b m-2'>
            <div className='w-full h-7 bg-gradient-to-tl px-4 from-cyan-900 via-blue-700 to-cyan-900 flex items-center font-bold text-blue-200'>Interests</div>
            <div className='border-blue-400 p-2'>
              <p>
                Passionate about exploring the intricate world of hacking, programming, and artificial intelligence. My curiosity extends beyond the digital realm, delving into philosophy to understand the underlying principles shaping our technological landscape. </p>
              <p>As a perpetual learner, I thrive on dissecting complex problems and finding innovative solutions. In my free time, I indulge in the art of software development. Always up for a challenge, I find inspiration in the pursuit of perfection, both in code and in the broader spectrum of life.
              </p>

            </div>
          </div>

          <div className='border border-blue-800 rounded-b m-2'>
            <div className='w-full h-7 bg-gradient-to-tl px-4 from-cyan-900 via-blue-700 to-cyan-900 flex items-center font-bold text-blue-200'>Achievements & Certs</div>
            <div className='border-blue-400 p-2'>
              <p>Smart India Hackathon 2022 Finalist</p>
              <p>Javascript cert by HackerRank</p>

            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default About
