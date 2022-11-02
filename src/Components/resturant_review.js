import React from 'react';
import './Styles//resturant.css';
import p1 from '../images/profile.jpg';
import i1 from '../images/r-photo-1.png';
import i2 from '../images/r-photo-2.png';
import i3 from '../images/r-photo-3.png';
import i4 from '../images/r-photo-4.png';
import i5 from '../images/r-photo-5.png';
import i6 from '../images/r-photo-6.png';
import love1 from '../images/hart.png';
import like2 from '../images/like.png';
import bad1 from '../images/bad.png';
import res1 from '../images/res-1 (1).png';
import res2 from '../images/res-1 (2).png';
import res3 from '../images/res-1 (3).png';
import res4 from '../images/res-1 (4).png';
import review from '../images/review-1.png';

function Resturant() {
  return (
    <div className='resturant' > 
      <div className='section-7'>
      <div className='horizantal-line-3'></div>
      <h1 className='topic-r'>Restaruant Review </h1>
        <h4 className='topic-r-def'>Having good restaurant reviews is crucial these days. 
        It is not just making our decision to pick one easier, 
        it is also helping the restaurant be more successful</h4>
        <a href='/'><button className='btn-r-1'>Sign Up For Review &#9655;&#9655;&#9655;</button></a>
      <div className='r-box-0'>
        <img src={review} alt='review' className='r-review-1'/>
        <div className='r-box-3'>
          <a href='/'><div className='r-box-4'><img className='res-image-3' src={res1} alt='menu'/></div></a>
          <a href='/'><div className='r-box-4'><img className='res-image-3' src={res2} alt='menu'/></div></a>
          <a href='/'><div className='r-box-4'><img className='res-image-3' src={res3} alt='menu'/></div></a>
          <a href='/'><div className='r-box-4'><img className='res-image-3' src={res4} alt='menu'/></div></a>
        </div>
      </div>

      </div>
      <div className='section-8'><center><br/>
        <h1>Best Review</h1>
        <div className='re-vertical'>
          <a href='/'><div className='re-box'>
            <div className='r-box-1'>
              <img className='r-profile' src={p1}alt='profile'/>
                Anni Hotel
            </div>
              <img className='r-image' src={i1} alt='resturant-image1'/>
                <div className='r-box-2'>
                &#11088;&#11088;&#11088;&#11088;&#11088;
                </div><hr className='hr-1'/>
              <div className='review'>
                  <img className='review-1' src={love1} alt='r-l-1'/>
                  <img className='review-1' src={like2} alt='r-l-2'/>
                  <img className='review-1' src={bad1} alt='r-l-3'/>
              </div>
          </div></a>
          <a href='/'><div className='re-box'>
            <div className='r-box-1'><img className='r-profile' src={p1}alt='profile'/>
            Goal Hotel
            </div>
              <img className='r-image' src={i2} alt='resturant-image2'/>
                <div className='r-box-2'>
                  &#11088;&#11088;&#11088;&#11088;&#11088;
                </div><hr className='hr-1'/>
              <div className='review'>
                  <img className='review-1' src={love1} alt='r-l-4'/>
                  <img className='review-1' src={like2} alt='r-l-5'/>
                  <img className='review-1' src={bad1} alt='r-l-6'/>
              </div>
          </div></a>
          <a href='/'><div className='re-box'>
            <div className='r-box-1'><img className='r-profile' src={p1}alt='profile'/>
            Froze Hotel
            </div>
              <img className='r-image' src={i3} alt='resturant-image3'/>
                <div className='r-box-2'>
                  &#11088;&#11088;&#11088;&#11088;
                </div><hr className='hr-1'/>
              <div className='review'>
                  <img className='review-1' src={love1} alt='r-l-7'/>
                  <img className='review-1' src={like2} alt='r-l-8'/>
                  <img className='review-1' src={bad1} alt='r-l-9'/>
              </div>
          </div></a>
        </div>
        <div className='re-vertical'>
          <a href='/'><div className='re-box'>
            <div className='r-box-1'><img className='r-profile' src={p1}alt='profile'/>
            Wonder Hotel
            </div>
              <img className='r-image' src={i4} alt='resturant-image4'/>
                <div className='r-box-2'>
                  &#11088;&#11088;&#11088;
                </div><hr className='hr-1'/>
              <div className='review'>
                  <img className='review-1' src={love1} alt='r-l-10'/>
                  <img className='review-1' src={like2} alt='r-l-11'/>
                  <img className='review-1' src={bad1} alt='r-l-12'/>
              </div>
          </div></a>
          <a href='/'><div className='re-box'>
            <div className='r-box-1'><img className='r-profile' src={p1}alt='profile'/>
            Lavinia Hotel
            </div>
              <img className='r-image' src={i5} alt='resturant-image5'/>
                <div className='r-box-2'>
                  &#11088;&#11088;&#11088;
                </div><hr className='hr-1'/>
              <div className='review'>
                  <img className='review-1' src={love1} alt='r-l-13'/>
                  <img className='review-1' src={like2} alt='r-l-14'/>
                  <img className='review-1' src={bad1} alt='r-l-15'/>
              </div>
          </div></a>
          <a href='/'><div className='re-box'>
            <div className='r-box-1'><img className='r-profile' src={p1}alt='profile'/>
            Grand Hotel
            </div>
              <img className='r-image' src={i6} alt='resturant-image6'/>
                <div className='r-box-2'>
                  &#11088;&#11088;&#11088;
                </div><hr className='hr-1'/>
              <div className='review'>
                  <img className='review-1' src={love1} alt='r-l-16'/>
                  <img className='review-1' src={like2} alt='r-l-17'/>
                  <img className='review-1' src={bad1} alt='r-l-18'/>
              </div>
          </div></a>
          </div>
        
          </center></div>
          <div className='r-banner-1'>

          </div>
        
        
    </div>
  );
}

export default Resturant;