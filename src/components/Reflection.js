import React from 'react'
import './ReflectionStyles.css'
import Profile from '../assets/profile.png'
import RLogo from '../assets/react-logo.png'

const Reflection = () => {
  return (
    <div className='training'>
      <div className='left'>
        <h1>Reflection</h1>
        <p>
          On December 17, 1903, Wilbur and Orville Wright—also known as the Wright Brothers—initiated the first flight
          at Kitty Hawk. This was a revolutionary step into the modern world of aviation. Presently, scientists,
          researchers, and entrepreneurs are constantly trying to find ways to convert air travel into space travel.
          The 2022 Web Graphics and Design class at Narragansett High School was tasked to build a web application where
          its theme is a topic of our interests. While the rest of the class was using vanilla HTML and CSS, I decided to
          go beyond and use a JavaScript library called ReactJS. React is a free and open-source front-end JavaScript library
          for building user interfaces based on UI components. It is maintained by Facebook (presently called Meta) and a
          community of individual developers and companies. React uses a declarative paradigm that makes it easier to reason
          about the application and aims to be both efficient and flexible. React reads these objects and uses them to create
          HTML elements on a virtual DOM, after which it gets synced with the real DOM. During this task I demonstrated my
          ability to plan out, design, and implement features into a React application. The application’s UI would be
          insufficient without these abilities, and the application’s content would not be compiled properly.
        </p>
        <p>
          When students were advised to pick a topic that best suited their interests, I initially made a list of themes that
          I am passionate about. Computers, code, aviation, languages, aircraft, and space exploration were at the top of my
          list. Given that I was writing a research paper about the space race in English, space exploration was fresh on my
          mind, and I decided to use it as my topic. When I was initially told about the project, I knew I wanted to create
          something using ReactJS. Originally, I planned to show the finished piece to either the teacher or present it to the
          rest of the class. I realized I needed to make major changes to my project when Mr. Herz stated that everyone should
          download their program to a flash drive. I had to convert my ReactJS application into vanilla HTML, CSS, and
          JavaScript since the school's dispersed computers are controlled and locked over what content individuals may
          download. To check whether it would work, I tried running a completed build production DOM and opening the folder.
          When I discovered that was not an option, I looked for a ReactJS to HTML application converter online. After
          conducting a deeper investigation, I discovered that React applications cannot be converted to vanilla HTML,
          which means the developer will have to design the entire website's content from scratch. However, certain React app
          content cannot be written in HTML. I chose to remove those components entirely from the vanilla HTML application and
          create the new one to make it more aesthetically attractive to the user.
        </p>
        <p>
          With the completion of this task, I improved my troubleshooting skills. Troubleshooting is a type of problem-solving
          technique that is frequently used to fix failing items or processes on a machine or system. It’s a logical, methodical
          search for the root of a problem in order to remedy it and restore functionality to a product or process. To diagnose the
          symptoms of anything, troubleshooting is required. Troubleshooting abilities are essential for every business because they
          will help you bridge the gap between the current and intended state and make a brighter future a possibility anytime a
          discrepancy between the current and desired state is seen and an issue is found. In order to avoid repeating the same
          mistake, I should pay attention to how the teacher wants the students to submit the final assignment in the future.
        </p>
        <a href='https://bit.ly/39s7edR' target='_blank'><button className='btn'>View Published React App</button></a>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='image-stack top'>
            <img src={Profile} className='img' alt='Profile' />
          </div>
          <div className='image-stack bottom'>
            <img src={RLogo} className='img' alt='React JS Logo' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reflection
