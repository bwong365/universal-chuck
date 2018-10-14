import React from 'react';
import img from './404-min.jpg';
import './NotFound.scss';

const NotFound = () =>  ( 
    <div id='container404'>
      <div id='block404'></div> {/* Make text universally unselectable */}
      <img id='img404' src={img} alt='Error 404'></img>
      <span id='msg404'>404 Not Found</span>
    </div>
  );

export default NotFound;