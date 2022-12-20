import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ImageCard from './ImageCard';

const CardCarousel = ({ rentalImages }) => {


    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 500 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 1,
        },
    };

    let playSpeed = (Math.random() * (5000 - 3000) + 3000);


    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={playSpeed}
            centerMode={false}
            draggable
            focusOnSelect={false}
            infinite
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            rewind={false}
            rewindWithAnimation={false}
            slidesToSlide={1}
            responsive={responsive}
            swipeable
        >
            {rentalImages && rentalImages.map((rental) => {
                return (
                    <ImageCard className='mx-2' key={rental.id} item={rental} />
                )
            })}

        </Carousel>
    )


}

export default CardCarousel;