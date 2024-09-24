import React from 'react';
import lefthero from './img/left-hero.jpg'
import moveimage from './img/plan-your-move-to-canada.jpeg'
const Home = () => {
  return (
    <div>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <img className='img-fluid' src={lefthero} /> 
            </div>
            <div className='hero-right  col-md-6'>
             <h1>Welcome to CIBC Bank</h1>
             <p>Keep you money safe with us!</p>
             <button className='hero-button btn btn-primary'>Learn More</button>
            </div>
        </div>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='About-area col-md-12 text-center'>
                    <h2>Open Your Bank Acccount with us</h2>
                    <p>Looking for financial advice? Read through our articles, videos, and tools with helpful information for everyday banking, borrowing, saving and financial planning needs.</p>

                </div>
               

            </div>
        </div>

        <div className='container-fluid'>
            <div className='move-area row '>
                <h2 className='text-center'>Plan your move to Canada</h2>
                <div className='col-md-6 text-right'>
                    <img src={moveimage} className='myimage col-md-6' ></img>
                </div>
                <div className='col-md-6 text-left'>
               
                <p>Start learning about the Canadian banking system, the immigration process and what you could expect when you arrive.</p>
                <button className='hero-button btn btn-primary'>Learn More</button>
                </div>

            </div>
        </div>


        <div className='container'>
            <div className='row'>
                <div className='About-area col-md-12 text-center'>
                    <h2>CIBC Advice - ready to help you move forward</h2>
                    <p>Looking for financial advice? Read through our articles, videos, and tools with helpful information for everyday banking, borrowing, saving and financial planning needs.</p>
                    <button className='hero-button btn btn-primary'>Learn More</button>
                </div>
               

            </div>
        </div>

 
    <section id="footer">
      <div className="container">
        <div className="row text-left text-xs-left text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul className="list-unstyled quick-links">
              <li><a href="#"><i className="fa fa-angle-double-right"></i> Home</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i> About</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i> FAQ</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i> Get Started</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i> Videos</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul className="list-unstyled quick-links">
              <li><a href="#"><i className="fa fa-angle-double-right"></i> Home</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i> About</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i> FAQ</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i> Get Started</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i> Videos</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul className="list-unstyled quick-links">
              <li><a href="#"><i className="fa fa-angle-double-right"></i> Home</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i> About</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i> FAQ</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i> Get Started</a></li>
              <li><a href="https://www.sunlimetech.com" title="Design and developed by"><i className="fa fa-angle-double-right"></i> Imprint</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item"><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-google-plus"></i></a></li>
              <li className="list-inline-item"><a href="#" target="_blank"><i className="fa fa-envelope"></i></a></li>
            </ul>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p>
              <u><a href="#">CIBC Bank</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]
            </p>
            <p className="h6">
              © All right Reserved. <a className="text-green ml-2" href="" target="_blank">Nawaz Chowdhury</a>
            </p>
          </div>
          <hr />
        </div>
      </div>
    </section>
  
 

    </div>
 

  );
  
 
};

export default Home;
