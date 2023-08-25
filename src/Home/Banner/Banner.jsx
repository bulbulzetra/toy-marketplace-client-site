import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// This is Banner Section
// AOS implementing to Banner
const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 200, once: true });
      }, []);

    return (
        <div className="carousel w-full"  data-aos="flip-right" data-aos-delay="200">
            <div id="slide1" className="carousel-item relative w-full">
                <img className="w-full h-[600px] rounded-lg" src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://images.pexels.com/photos/12211/pexels-photo-12211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full h-[600px] rounded-lg" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://images.pexels.com/photos/381228/pexels-photo-381228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full h-[600px] rounded-lg" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://images.pexels.com/photos/243167/pexels-photo-243167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full h-[600px] rounded-lg" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;