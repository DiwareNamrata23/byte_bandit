import React, { useEffect } from "react";
import "./Home.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

function Home() {
  useEffect(() => {
    AOS.init({
      offset: 250,
      delay: 180
    });
  }, []); // Empty dependency array ensures AOS.init() runs only once after component mounting

  return (
    <>
      <div className="mainpage">
   
        <div className="landimg"></div>
        <div className="head" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
 
          <h3 >SafeSteps</h3>
          <p>For Anyone , Anywhere , at Anywhere</p>
          <p id="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, placeat.</p>
        </div>
      </div>
      <div className="works">
        <h3>How It Works</h3> 
        <pre>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</pre>
        <pre>Est vel obcaecati quam ratione aperiam, reprehenderit, sint placeat</pre>
        <pre>quae sed earum enim quibusdam cupiditate illo omnis repudiandae </pre>
        <pre>pariatur nesciunt aliquam facere.</pre>
        <br/>  <br/>
        <div className="table">
          <table border="1">
            <tr className="tab">
              <th id="image"></th>
              <th id="column">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequuntur deserunt libero sunt excepturi, doloremque adipisci iste non similique explicabo nihil temporibus vitae totam deleniti assumenda animi voluptas incidunt maiores rem eius beatae. Pariatur cum quis corrupti voluptatibus! Ex molestiae veniam dolorem placeat aut, tempore maiores hic consectetur dicta eum modi exercitationem? Culpa optio necessitatibus, animi sed odio quas molestiae perferendis odit inventore. Minima optio omnis sit ullam voluptatem aliquid, accusamus non vero, magni deserunt rem, corrupti esse quos quo porro repudiandae cupiditate harum tenetur quam fuga numquam labore voluptate. Laborum distinctio, aspernatur accusantium commodi ipsa fugit! Est, nesciunt fugit.</th>
            </tr>
          </table>
        </div>
      </div>
      <div className="meet">
        <h3>Meet Our Team</h3>
        <div className="flipcard">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front"></div>
              <div class="flip-card-back">
                <h1>Namrata Diware</h1> 
                <p>Computer Science Engineer</p> 
                <p>I'm a 2nd year Btech student pursuing Engineering in Shri RamdeoBaba College of Engineering and Management </p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front2"></div>
              <div class="flip-card-back">
                <h1>Prathamesh Rokade</h1> 
                <p>Computer Science Engineer</p> 
                <p>I'm a 2nd year Btech student pursuing Engineering in Shri RamdeoBaba College of Engineering and Management </p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front3"></div>
              <div class="flip-card-back">
                <h1>Pranay Rokade</h1> 
                <p>Computer Science Engineer</p> 
                <p>I'm a 2nd year Btech student pursuing Engineering in Shri RamdeoBaba College of Engineering and Management </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Home;
