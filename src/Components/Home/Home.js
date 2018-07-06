import React,{Component} from 'react';
import Pic1 from '../../images/pic1.png';
import Pic2 from '../../images/pic2.png';
import Pic3 from '../../images/pic3.png';
import Pic4 from '../../images/pic4.png';
import Pic5 from '../../images/pic5.png';
import Pic6 from '../../images/pic6.png';
import Pic7 from '../../images/pic7.png';
import { Carousel } from 'react-responsive-carousel';

class Home extends Component {

    render() {
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
      
      <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src={Pic1} alt="Pic1" width="1200" height="700"/>
              </div>
      
              <div className="item">
              <img src={Pic3} alt="Pic3" width="1200" height="700"/>
              </div>   
            </div>
            </div>
          );
        }
}
export default Home;