import React from 'react';
import './Styles//tech.css';
import tech from '../images/tech-1-anim.png';
import Robot from '../images/robot.png';
import It from '../images/it.png';
import Ai from '../images/ai.png';
import Es from '../images/es.png';
import Cs from '../images/cs.png';
import wimpy from '../images/t-robot.webp';


function Tech() {
  return (
    <div className='tech' >
      
      <div className='section-5'>
        <div className='horizantal-line-1'> </div>
        <div className='vertical-line-1'> </div>
          <div class="topic-1">Technology</div>
          <h4 className='topic-2-def'>Technology is the application of scientific 
            knowledge to the practical aims of human life or,
             as it is sometimes phrased, to the change and 
             manipulation of the human environment.</h4>
             <a href='/'><button className='link-1'> Sign up To Day &#9655;&#9655;&#9655;</button></a>
          <img className='tech-1' src={tech} alt='tech-sticker' style={{float:'left'}}/>

        </div><br/>
        <div className='section-6'> 
        <a href='/'><div className='box-1'>
            <img className='menu-img-t' src={It} alt='it'/>
          </div></a>
          <a href='/'><div className='box-1'>
            <img className='menu-img-t' src={Ai} alt='ai'/>
          </div></a>
          <a href='/'><div className='box-1'>
            <img className='menu-img-t' src={Es} alt='es'/>
          </div></a>
          <a href='/'><div className='box-1'>
            <img className='menu-img-t' src={Cs} alt='cs'/>
          </div></a>
          <div className='box-2'>
            <h2 className='menu-title-a'>Technology Subjects</h2>
            <h4 className='menu-title-b'>
            Co-design and implement a tech solution based on your specific needs.
            Prototype tech solutions in consultation with your team.
            Develop solutions on top of our core products (Flow, Lumen, Caddisfly, RSR).
            Translate sector specific software needs into custom solutions

            </h4>
          <img className='img-robot' src={Robot} alt='robot'/>
          </div>
        </div><br/><br/> 
        <div className='k-box-1-1'>
        <div className='k-box-2-1'>
          <img className='k-box-img-1' src={wimpy} alt='story'/>
        </div>
        <div className='k-box-3-1'>
          <h2 className='k-story-topic-1'>How a UTSA grad and his Alt-Bionics startup got to the cutting edge of prosthetics</h2>
          <h4 className='k-story-tit-1'>For amputees, high-tech prosthetic hands are expensive and hard to repair. A San Antonio man aims to change that.</h4>
          <a href='/'><button className='k-btn-read-1'>Read More  &#9947;</button></a>
        </div>

        </div> 
    </div>
  );
}

export default Tech;