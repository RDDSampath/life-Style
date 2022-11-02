import React from 'react';
import './Styles//Navbar.css';
import Logo from '../images/logo.png';


function Nav() {
  
  return (
    <div>
        <div className='navbar'>
          <a href="/"><img className='logo' src={Logo} alt='logo'/></a>
        
           <ul>
            <a href="/"><li >
              <button className='nav-btn-1'>Log in</button>
              </li></a>
            <a href="/"><li>
              <button className='nav-btn-2'>Sign in</button>
              </li></a>
            <a href="/resturant"><li className='li1'>
            <div class="dropdown">
              Resturant
              <div class="dropdown-content">
                    <a href="/">New</a>
                    <a href="/">Best</a>
                  </div>
            </div>
              </li></a>
            <a href="/Kids"><li className='li1'>
            <div class="dropdown">
                  Kids
                  <div class="dropdown-content">
                    <a href="/">Games</a>
                    <a href="/">Drawing</a>
                    <a href="/">Songs</a>
                    <a href="/">Alphabet</a>
                  </div>
            </div> 
              </li></a>
            <a href="/tech"><li className='li1'>
            <div class="dropdown">
              Technology
              <div class="dropdown-content">
                    <a href="/">ICT</a>
                    <a href="/">Computer Science</a>
                    <a href="/">Electronic Science</a>
                    <a href="/">AI</a>
                  </div>
            </div> 
              </li></a>
            <a href="/res"><li className='li1'>
            <div class="dropdown">
              Recipe
              <div class="dropdown-content">
                    <a href="/">New Recipe</a>
                    <a href="/">chinna Recipe</a>
                    <a href="/">Japan Recipe</a>
                  </div>
            </div>
              </li></a>
            <a href="/"><li className='li1'>Home</li></a>
              <form >
                <input type='text' className='search' placeholder='search here....' /> 
                <button type="submit" className='form-text'>SEARCH</button>
              </form>
            </ul> 
            
            
            
        </div>
        
        
    </div>
  );
}

export default Nav;