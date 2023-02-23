import {useState} from "react";
import styles from "./ImageSlider.module.scss"

const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}

export const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    return (
        <div className={styles.sliderStyles}>
            <div>
                <div onClick={goToPrevious} className={styles.leftArrowStyles}>
                    ❰
                </div>
                <div onClick={goToNext} className={styles.rightArrowStyles}>
                    ❱
                </div>
            </div>
            <div style={slideStylesWidthBackground}></div>
        </div>
    );
};