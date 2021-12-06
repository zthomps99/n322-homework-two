import './hero.css'
import controller from '../images/controller2.jpg'
import middle from '../images/middle.jpg'
import woman from '../images/womanplaying.jpg'


function Hero(){
    return(
        <div className="heroHolder">
            <div className="heroImage">
                <img src={controller} alt="Controller" />
            </div>
            <div className="heroImage">
                <img src={middle} alt="Double controllers" />
            </div>
            <div className="heroImage">
                <img src={woman} alt="Woman" />
            </div>
        </div>
    );
}

export default Hero;
