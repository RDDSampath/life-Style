import React from 'react';
//import Styles
import './Styles/recipe.css'
//import images
import banner from '../images/f-image-banner.png';
import food1 from '../images/f-image-1.png';
import food2 from '../images/f-image-2.png';
import food3 from '../images/f-image-3.png';
import food4 from '../images/f-image-4.png';
import food5 from '../images/f-image-5.png';
import food6 from '../images/f-image-6.png';
import food7 from '../images/f-image-7.png';
import food8 from '../images/f-image-8.png';
import ad from '../images/f-image-ad.png';



function Food() {
  return (
    <div className='food' >
      <div className='section-9'>
        <a href="/"><div className='section-10'>
          <h1 className='title-1'>Classic Tuna Noodle Casserole</h1>

          <h4 className='title-2'>Tuna noodle casserole is classic American comfort food topped 
            with crushed potato chips. Made with canned tuna, canned cream 
            of mushroom soup, and egg noodles, this tuna casserole is always
             a family favorite.</h4>

             <h3 className='title-3'><a href='/'>GET THE RECIPE</a></h3>
             
          <img className='f-image-banner' src={banner} alt='food-banner'/>
        </div></a>
        <div className='section-11'><br/>
          <div className='f-box-2'><img className='f-box-2-1' src={ad} alt='adz'/></div>
          <a href='/re'><div className='f-box-1'>
            <img className='f-image-1' src={food1} alt='food-1'/>
            <div className='tit-1'>Foods hub</div>
            <div className='tit-2'>Easy Shepherd's Pie</div>
            <div className='tit-3'>&#9684; 17 Min</div>
            <div className='tit-4'>&#11088;&#11088;&#11088;&#11088;&#11088;</div>
          </div></a>
          <a href='/re'><div className='f-box-1'>
            <img className='f-image-1' src={food2} alt='food-2'/>
            <div className='tit-1'>Food corner</div>
            <div className='tit-2'>Chicken Noodle Casserole</div>
            <div className='tit-3'>&#9684; 2 hour</div>
            <div className='tit-4'>&#11088;&#11088;&#11088;&#11088;&#11088;</div>
          </div></a>
          <a href='/re'><div className='f-box-1'>
            <img className='f-image-1' src={food3} alt='food-3'/>
            <div className='tit-1'>Order Now</div><br/><br/>
            <div className='tit-2'>Homemade Lasagna</div>
            <div className='tit-3'>&#9684; 3.17 hour</div>
            <div className='tit-4'>&#11088;&#11088;&#11088;&#11088;&#11088;</div>
          </div></a>
          <a href='/re'><div className='f-box-1'>
            <img className='f-image-1' src={food4} alt='food-4'/>
            <div className='tit-1'>Baker Fast</div><br/><br/>
            <div className='tit-2'>Pizza Casserole</div>
            <div className='tit-3'>&#9684; 5hour Min</div>
            <div className='tit-4'>&#11088;&#11088;&#11088;&#11088;&#11088;</div>
          </div></a>
          <a href='/re'><div className='f-box-1'>
            <img className='f-image-1' src={food5} alt='food-5'/>
            <div className='tit-1'>Home Food</div><br/><br/>
            <div className='tit-2'>Asparagus Strata</div>
            <div className='tit-3'>&#9684; 1 Day</div>
            <div className='tit-4'>&#11088;&#11088;&#11088;&#11088;&#11088;</div>
          </div></a>
          <a href='/re'><div className='f-box-1'>
            <img className='f-image-1' src={food6} alt='food-6'/>
            <div className='tit-1'>Food order</div><br/><br/>
            <div className='tit-2'>Burger</div>
            <div className='tit-3'>&#9684; 1 Day Min</div>
            <div className='tit-4'>&#11088;&#11088;&#11088;&#11088;&#11088;</div>
          </div></a>
          <a href='/re'><div className='f-box-1'>
            <img className='f-image-1' src={food7} alt='food-7'/>
            <div className='tit-1'>Food Fast</div><br/><br/>
            <div className='tit-2'>Fish Bun</div>
            <div className='tit-3'>&#9684; 3 Day</div>
            <div className='tit-4'>&#11088;&#11088;&#11088;&#11088;&#11088;</div>
          </div></a>
          <a href='/re'><div className='f-box-1'>
            <img className='f-image-1' src={food8} alt='food-8'/>
            <div className='tit-1'>Baker</div><br/><br/>
            <div className='tit-2'>Pan Cakes</div>
            <div className='tit-3'>&#9684; 5 Day Min</div>
            <div className='tit-4'>&#11088;&#11088;&#11088;&#11088;&#11088;</div>
          </div></a>
        </div>
        <div className='sec-9'>
          <div className='f-box-3'></div>
          <div className='f-box-4'></div>
          <div className='f-box-5'></div>

          
        </div>
      </div>
        
        
    </div>
  );
}

export default Food;