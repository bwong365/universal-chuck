import React from 'react'

const Home = ({ isExpanded, title }) => (
  <div>
    {isExpanded 
      ? <h1>{title}</h1>
      : <div className='barTitle'>{title}</div>
    }
    <p>
      This app is for anyone who wants to study the phenomenon
      that is Chuck Norris, but gets confused by all these contemporary
      human languages!
    </p>
    <p style={{fontSize:'1rem'}}>
      *More realistically, this app is about an exploration of Node.js,
      and was an excuse to build a simple server.
    </p>
  </div>
);

export default Home