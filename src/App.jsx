import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import th from './images/th.jpeg';
import { MdOutlineComputer } from "react-icons/md";
import { FaMusic } from "react-icons/fa6";
import { MdLiveTv } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import css from './images/css.jpg';
import html from './images/html.jpg';
import graph from './images/graph.jpg';
import images from './images/images.jpeg';
import image from './images/image.jpeg';
import img from './images/img.jpeg';
import img2 from './images/img2.jpeg';
import download from './images/download.jpeg';
import run from './images/run.jpg';
import videos from './images/videos.mp4';

  const App = () => {
    return (
      <div className='container'>
        <div className='header'>
          <div className="image">
            <img src={th} height='90px' width="150px" alt='img'/>
          </div>
          <div className='text'>
            <input></input>
            <span className='icon'><FaSearch /></span>
          </div>
        </div>
        <div className="cont">
        <div className="left">
          <div className="home"><FaHome /></div>
          <div className='comp'><MdOutlineComputer /></div>
          <div className="music"><FaMusic /></div>
          <div className="live"><MdLiveTv /></div>
          <div className="gaming"><SiYoutubegaming /></div>
        </div>
          <div className="right">
            <div className="row1">
              <div className='img1'>
              <video width='350px' height="200px" controls>
            <source src={videos} type='video/mp4'/>
              </video>
              <h2>Learning css in 2hours</h2><br></br>
              <p>9 months ago</p>
              </div>
              <div className="img1">
              <img src={html} height="200px" width="350px" alt="css"/>
              <h2>Learning html in 1hours</h2><br></br>
              <p>2 months ago</p>
              </div>
              <div className="img1">
              <img src={graph} height="200px" width="350px" alt="css"/>
              <h2>Learning Graphical design in 1month</h2><br></br>
              <p> 12 months ago</p>
              </div>
            </div>
          
        
          <div className="row2">
              <div className='img1'>
              <img src={image} height="200px" width="350px" alt="css"/>
              <h2>Watching Cricket match</h2><br></br>
              <p>2 years ago</p>
              </div>
              <div className='img1'>
              <img src={images} height="200px" width="350px" alt="css"/>
              <h2>Enjoy to watching Football Match</h2><br></br>
              <p>5 months ago</p>
              </div>
              <div className='img2'>
              <img src={img} height="200px" width="350px" alt="css"/>
              <h2>Super Singer - Season 2</h2><br></br>
              <p>1 months ago</p>
              </div>
          </div>
          <div className="row3">
              <div className='img1'>
              <img src={img2} height="200px" width="350px" alt="css"/>
              <h2>Cook with Komali Season 3</h2><br></br>
              <p>3 months ago</p>
              </div>
              <div className='img1'>
              <img src={run} height="200px" width="350px" alt="css"/>
              <h2>Running Competition</h2><br></br>
              <p>2 years ago</p>
              </div>
              <div className='img1'>
              <img src={download} height="200px" width="350px" alt="css"/>
              <h2>Cycling Competition</h2><br></br>
              <p>1 years ago</p>
              </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
  export default App;
 
