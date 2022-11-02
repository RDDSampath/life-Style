import React from 'react';
import './Styles//kids.css';
import Kid from '../images/kid-back.png';
import Boy from '../images/skate-boy.png';
import Alphabet from '../images/alphabet.png';
import Game from '../images/games.png';
import Song from '../images/songs.png';
import Draw from '../images/drawing.png';
import wimpy from '../images/story.png';

function Kids() {
  return (
    <div className='kids' >
        <div className='section-3'>
          <div class="rainbow-letters">
          <span>K</span>
          <span>I</span>
          <span>D</span>
          <span>S </span>
          <span>L</span>
          <span>I</span>
          <span>F</span>
          <span>E</span>
            </div>
            <div className='sub-letters'>
              KidsLife ensures that you never miss out on any of 
              your entitlements! You can count on us for the 
              accurate and timely payment of your Child Benefit 
              and Growth Package. And you can regard us as a 
              family partner from a financial standpoint too.</div>
          <img className='kid-1' src={Kid} alt='child-sticker'/>
          <a href='/'><button className='kid-2'>Sign up Today &#9655;&#9655;&#9655;</button></a>

        </div><br/>
        <div className='section-4'> 
          <a href='/'><div className='box-1'>
            <img className='menu-img' src={Alphabet} alt='Alphabet'/>
          </div></a>
          <a href='/'><div className='box-1'>
            <img className='menu-img' src={Game} alt='game'/>
          </div></a>
          <a href='/'><div className='box-1'>
            <img className='menu-img' src={Song} alt='song'/>
          </div></a>
          <a href='/'><div className='box-1'>
            <img className='menu-img' src={Draw} alt='draw'/>
          </div></a>
          <div className='box-2'>
            <h2 className='menu-title-a'>For Kids</h2>
            <h4 className='menu-title-b'>Educational resources for parents and teachers.
              Teaching tools to use in the primary,
               young learner and kids classroom, lots of free resources.</h4>
            <img className='img-boy' src={Boy} alt='skating-boy'/>
          </div>
        </div><br/><br/>
        <div className='k-box-1'>
        <div className='k-box-2'>
          <img class='k-box-img' src={wimpy} alt='story'/>
        </div>
        <div className='k-box-3'>
          <h2 className='k-story-topic'>Diary of a Wimpy Kid: How to Survive Funny Friends</h2>
          <h4 className='k-story-tit'>After a big fight with Rowley Jefferson, Greg is on the lookout for a new best friend.</h4>
          <a href='/'><button className='k-btn-read'>Read More  &#9947;</button></a>
        </div>

        </div>



       
    </div>
  );
}

export default Kids;