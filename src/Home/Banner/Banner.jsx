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
                <img className="w-full h-[500px] rounded-lg" src="https://cdn.pixabay.com/photo/2019/12/31/22/38/fantasy-4732736_1280.jpg"  />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://cdn.pixabay.com/photo/2023/05/24/17/49/ai-generated-8015425_1280.jpg" className="w-full h-[500px] rounded-lg" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://cdn.pixabay.com/photo/2019/04/11/22/57/robot-4120890_1280.jpg" className="w-full h-[500px] rounded-lg" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://cdn.pixabay.com/photo/2019/04/11/22/57/robot-4120890_1280.jpg" className="w-full h-[500px] rounded-lg" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;