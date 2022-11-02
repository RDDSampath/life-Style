import React from 'react';
import {useRef} from 'react';
import './Styles//home.css';

//image import
import Tech from '../images/tech.png';
import Kid from '../images/kid.png';
import Cook from '../images/cook.png';
import Cafe from '../images/cafe.png';
import graph from '../images/home-back.png';
import Facebook from '../images/facebook-w.png';
import Twitter from '../images/twitter-w.png';
import Linkedin from '../images/linkedin-w.png';
import Instagram from '../images/instagram-w.png';



function Home() {
    const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
  <div>
  <div class="section-1">
    <div className='horizantal-line-2'> </div>
        <h1 className='topic'>Lifestyle</h1>
        <h4 className='topic-def'> lifestyle as the way a person lives.
           This includes patterns of social relations,
            consumption, entertainment, and dress.
             A lifestyle typically also reflects an
              individual's attitudes, values or worldview.</h4>

        <div className='container-h'>
          <img className='back-img' src={graph} alt='profile'/>
        </div>
        <a href='/'><button className='btn-1'>Sign Up Today &#9655;&#9655;&#9655;</button></a>

        <div className='trans'></div>

        <center><button className='btn' onClick={handleClick}><div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div></button></center>

        <a href="/"><img className='social-link' src={Facebook} alt='facebook'/></a>
        <a href="/"><img className='social-link' src={Twitter} alt='Twitter' style={{left:'14vw'}}/></a>
        <a href="/"><img className='social-link' src={Linkedin} alt='Linkedin'style={{left:'18vw'}}/></a>
        <a href="/"><img className='social-link' src={Instagram} alt='Instagram'style={{left:'22vw'}}/></a>
  </div>


  <div className="section-2" ref={ref}>

    <div className='container-1'>
      <h1 className='h-detail-m'>About lifestyle</h1>
      <div className='h-detail'>
      “Lifestyle is the physical, psychological, social, and economical, values, interests, opinions, and behaviors of a certain individual, group or community. It is how they live their life. People around the world have different kinds of lifestyles, like healthy to unhealthy, or active to inactive”
      </div>
          <div className='container-box'style={{marginRight:'10vw'}}>
          <a href='/resturant'>
            <img className='anime-image' src={Cafe} alt='resturant'/>Resturant</a>
          </div>
          <div className='container-box'>
          <a href='/res'>
            <img className='anime-image' src={Cook} alt='recepie'/> Recipece</a>
            </div>
          <div className='container-box'>
            <a href='/kids'>
              <img className='anime-image' src={Kid} alt='kids'/>Kids</a>
            </div>
          <div className='container-box'>
          <a href='/tech'>
            <img className='anime-image' src={Tech} alt='tech'/> Technology</a>
            </div>
    </div>

        <br/>
        <div className='container-1'>
          <div className='banner-img' ></div></div>
    </div>
      <div className='container-3'>
        </div>
</div>
  );
}

export default Home;