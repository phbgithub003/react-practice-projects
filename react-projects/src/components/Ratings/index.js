import { FaStar } from "react-icons/fa";
import { useState } from "react";
import './style.css'
const Ratings = ({ noOfStars = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentRating) {
        setRating(getCurrentRating)
    }

    function handleMouseEnter(getCurrentRating) {
        setHover(getCurrentRating)
    }

    function handleMouseLeave() {
        setHover(rating)
    }

    return (
        <div className="star-rating">
            {[...Array(noOfStars)].map((_, index) => {
                index += 1;

                return (
                    <FaStar
                        key={index}
                        className={index <= (hover || rating) ? "active" : "inactive"}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40}
                    />
                );
            })}
        </div>
    );
};

export default Ratings;