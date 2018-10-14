import React from 'react';
import './About.scss'

const About = ({ title, isExpanded }) => (
  <div>
    {isExpanded ? <h2>{title}</h2> : <div className='barTitle'><span>{title}</span></div>}
    <p>
      This app was developed by Ben Wong to play around with React and Node.js.
      One of the goals was to enable CORS by setting up a Node server,
      and letting the backend make the public API calls.
      Of course, if you're reading this page, you probably already knew most of that.
    </p>
    <p>
      <span className='quote'>
        I just thought the nav could use more links.<br/>
        <span className='offset'>
          - Ben
        </span>
      </span>
    </p>
    
  </div>
);

export default About;