import {useRef} from "react";
import {useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from 'react';

function SliderComp({zet}) {
    const myRef = useRef(null)
    const handleButtonClick = () => {
        myRef.current.focus()
    };
    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await response.json()
            }catch (error){
                console.log('error')
            }
        }
        fetchData()
    })
    return(
        <>
            <input {...zet} ref={myRef}/>
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide onClick={ () => handleButtonClick()}> 
            <img src="../images/2021 Summer Gothic Rock Black Mini Dress Women Sexy Strap Sleeveless V collar Lacing Side Lace up A-line Female Short Sundress - Black _ M.jpg" />
            </SwiperSlide>
            <SwiperSlide onClick={ () => handleButtonClick()}> 
            <img src="../images/Sweetheart Neck Lantern Sleeve Ruched Bust Dress.jpg" />
            </SwiperSlide>
            <SwiperSlide onClick={ () => handleButtonClick()}> 
            <img src="../images/загрузка (11).jpg" />
            </SwiperSlide>
            ...
        </Swiper>

        </>
    )
}

export default SliderComp;

