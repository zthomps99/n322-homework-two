import './home.css'
import vertical from '../images/verticalgamingman.jpg'
import warzone from '../images/warzone.jpg'
import close from '../images/closeup.jpg'


function Home(){
    return(
        <div>
            <div className="homeBanner">
                <p span className="news">Latest News</p>
                <p>Sony to become the Official Virtual Fan Engagement Partner of Manchester City Football Club</p>
            </div>
            <div className="homeContent">
                <div className="gridOne">
                    <div className="gridThree">
                        <div className="gridFour">
                            <img src={warzone} alt="CoD Warzone" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius risus ac augue rhoncus lacinia. In hac habitasse platea dictumst. Nulla vehicula lacus sagittis arcu facilisis, et ultrices massa faucibus.</p>
                    </div>
                    <div className="gridFive">
                        <img src={close} alt="Guy gaming" />
                    </div>
                    <div className="gridSix">
                        <p span className="subInfo">Suspendisse tristique sagittis elit, nec gravida nisl imperdiet vel. Fusce facilisis varius magna vel ullamcorper. Maecenas luctus fermentum quam, vitae egestas mauris ultricies eget. Nam vulputate ut purus nec auctor. Nullam sit amet orci non ante tincidunt hendrerit sed sed neque.</p>
                    </div>
                </div>
            <div className="gridTwo">
                <img src={vertical} alt="Guy gaming" />
            </div>
        </div>
        </div>
    );
}

export default Home;
