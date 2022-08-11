import React from "react";
import Header from "./Header";
import "./Home.css"
import prideimg from './../../img/1.jpg'
import hand from '../../img/2.png'
import Data from '../../Data'
import Carousel from 'react-bootstrap/Carousel';
import slide1 from './../../img/sli1.jpg'
import slide2 from './../../img/slid2.jpg'
import slide3 from './../../img/33.jpg'


const Home = ()=>{
    const blogitem = Data.map((item)=>{
        return (
            <div className="col-md-4">
                    <div className="box">
                    <img src={item.img} alt=''/>
                    <h5>{item.title}</h5>
                    <span>{item.time}</span>
                    <h6> {item.price}</h6>
                </div>
                <button>order now</button>
            </div>
        )
    }

    )
    return(
        <div>
        <Header />
        <section className="numbers">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-3">
                        <h2>1305+</h2>
                       <h6>SAVINGS</h6>

                    </div>
                    <div className="col-md-3 col-sm-3">
                    <h2>6000+</h2>
                       <h6>PHOTOS</h6>

                    </div>
                    <div className="col-md-3 col-sm-3">
                    <h2>1550+</h2>
                       <h6>ROCKETS</h6>

                    </div>
                    <div className="col-md-3 col-sm-3">
                    <h2>7000+</h2>
                       <h6>GLOBES</h6>

                    </div>
                    
                        
                        
                </div>
            </div>
        </section>
        <section>
            <div className="pride">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <img src={prideimg}  title="prideimg" alt=""/>
                        </div>
                        <div className="col-md-5">
                           <h2>We pride ourselves on making real food from the best ingredients.</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p> 
                           <button>learn more</button>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="hand">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h2>We make everything by hand with the best possible ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <ul>
                               <li>Etiam sed dolor ac diam volutpat.</li>
                               <li>Erat volutpat aliquet imperdiet.</li>
                                <li>purus a odio finibus bibendum.</li>
                              </ul>
                              <button>learn more</button>

                        </div>
                        <div className="col-md-7"><img src={hand} title="hand" alt=""/></div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="stomach">
                <div className="container">
                    <div className="row ">
                    
                           <h2>When a man's stomach is full it makes no
                             <br/>
                           difference whether he is rich or poor.</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p> 
                           <a  href="#" > Watch Our Story</a>                      
                    </div>
                </div>
            </div>
        </section>
        <section className="blogs">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                        <h2>Explore Our Foods</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo.
                            <br/>
                             Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and 
                             <br/>
                             Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                    </div>
                </div>
                <div className="row">
                    {blogitem}
                </div>
            </div>
        </section>
        <section className="slider">
        <div className="container">
        <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                        <h2>Testimonials</h2>
                    </div>
                    </div>

                <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                    <Carousel >
      <Carousel.Item>
        <img src={slide3} alt='' />
        <Carousel.Caption>
          <h3>MOhamed wael -front end</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={slide2} alt='' />

        <Carousel.Caption>
          <h3>Johnthan Doe - UX Designer</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={slide1} alt='' />


        <Carousel.Caption>
          <h3>Simab Dave - Web Designer</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
         </div>
          </div>
           </div>     
  </section>
  <section className="que">
    <div className="ask text-center"><h2>Frequently Asked Questions</h2></div>
<div className="container">
    <div className="row">
        <div className="col-md-6 col-sm-6">
            <div className="txt">
                <h4> Do you bake breads containing animal fats or products?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>
        </div>
        <div className="col-md-6 col-sm-6"> 
         <div className="txt">
                <h4> Is Foodera Bread really baked fresh each day?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div></div>
        <div className="col-md-6 col-sm-6"> 
         <div className="txt">
                <h4> Can I order your products online?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div></div>
        <div className="col-md-6 col-sm-6"> 
         <div className="txt">
                <h4> When are you opening a shop near me?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div></div>

    </div>
</div>
  </section>
  <section class="parallax-content2 parallax2 text-center" data-stellar-background-ratio="0.4" >
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <h4>Baked fresh daily by bakers with passion.</h4>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                        <button >learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="text-center">
                <div class="container">
                    <div class="col-md-12 mo">
                        <h1>Hurry up! Subscribe our newsletter <br/> and get 25% Off</h1>
                        <p>Limited time offer for this month. No credit card required.</p>
                     
                </div>
            </div>
        </section>
        <section className="footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
        <a href="#">Register</a>
        <a  href="#">forum</a>
        <a  href="#">affiliate</a>
        <a  href="#">faq</a>
    </div>

                </div>
            </div>
        </section>
        </div>
    )
}
export default Home;