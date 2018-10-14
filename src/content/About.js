import React from 'react';

const About = () => (
  <div>
    <h2>About the app</h2>
    <p>
      This app was developed by Ben Wong to play around with React and Node.js.
      One of the goals was to enable CORS through setting up a Node server,
      and to let the backend make the public API calls.
      Of course if you're reading this, you probably knew most of that.
      I just thought the nav could use more links.
    </p>
    <p style={{
      position: 'relative',
      fontStyle: 'italic',
      left: '10%',
      padding: 30
    }}>- Ben</p>
  </div>
);

export default About;