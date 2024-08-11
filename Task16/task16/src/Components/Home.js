import React from 'react';
import logo from './python.jpg';
import logo1 from './download.jpeg'
import logo2 from './nlp.jpeg'
function Home() {
  return (
    
    // <div>
    //   <h2>All Courses</h2>

    //   <div className="card-deck">
    //   <div className="col-lg-3">
    //     <div className="card">
    //       <img className="card-img-top" src={logo} alt="Course 1" />
    //       <div className="card-body">
    //         <h5 className="card-title">Python Objects 101: How to</h5>
    //       </div>
    //       </div>
    //     </div>
    //     <div className="col-lg-3">
    //     <div className="card">
    //       <img className="card-img-top" src={logo1} alt="Course 2" />
    //       <div className="card-body">
    //         <h5 className="card-title">Machine Learning Must-</h5>
    //       </div>
    //     </div>
    //     </div>
    //     <div className="col-lg-3">
    //     <div className="card">
    //       <img className="card-img-top" src={logo2} alt="Course 3" />
    //       <div className="card-body">
    //         <h5 className="card-title">Unlocking the Power of NLP:</h5>
    //       </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <section class="awards">
      <h2>All Courses</h2>
      <br/>
    <div class="awards-list">
        <div class="col-lg-3">
        <div class="words">
        <div class="card">  
          <img className="card-img-top" src={logo} alt="Course 1" />
           <div className="card-body">
            <h5 className="card-title">Python Objects 101: How to</h5>
          </div>
          </div>
           </div>
        </div>
        <br/>
        <div class="col-lg-3">

        <div class="words">
        <div class="card">  
          <img className="card-img-top" src={logo1} alt="Course 2" />
          <div className="card-body">
            <h5 className="card-title">Machine Learning Must-</h5>
          </div>
          </div>
        </div>

        </div>
        <div class="col-lg-3">
            <div class="words">
            <div class="card">  
            <img className="card-img-top" src={logo2} alt="Course 3" />
          <div className="card-body">
             <h5 className="card-title">Unlocking the Power of NLP:</h5>
           </div>
           </div>  
            </div>

        </div>
        
    </div>
</section>
  );
}

export default Home;
