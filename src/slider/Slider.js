import React from 'react';
import styles from "./Slider.module.scss"
import image1 from "../assets/image/img-1.jpg"
import image2 from "../assets/image/img-2.jpg"
import image3 from "../assets/image/img-3.jpg"
import image4 from "../assets/image/img-4.jpg"
import image5 from "../assets/image/img-5.jpg"
import {ImageSlider} from "./imageSlider/ImageSlider";

export const Slider = () => {

    const slides = [
        {url: image1, title: "img1"},
        {url: image2, title: "img2"},
        {url: image3, title: "img3"},
        {url: image4, title: "img4"},
        {url: image5, title: "img5"}
    ]


    return (
        <div className={styles.sliderBlock}>
           <p>Block Slider</p>
            <div className={styles.containerStyles}>
                <ImageSlider slides={slides}/>
            </div>
        </div>
    );
};
