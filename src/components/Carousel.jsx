// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// image import
import img1 from '../assets/images/web.webp'
import img2 from '../assets/images/digital marketing.jpg'
import img3 from '../assets/images/Graphic Design.avif'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';

export default function Carousel() {
    return (
        <div className='container px-6 py-10 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}

                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slider image={img1} text='Your Web Development Projects Done in Minutes' />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider image={img2} text='Your Digital Marketing Projects Done in Minutes' />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider image={img3} text='Your Graphics Design Projects Done in Minutes' />
                </SwiperSlide>

            </Swiper>
        </div>
    );
}