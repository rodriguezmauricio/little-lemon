import "./testimonialCards.css";
import { BsStarFill } from "react-icons/bs";

const TestimonialCards = ({ username, img, rating, testimonial }) => {
  const renderStars = (rating) => {
    let result = [];
    for (let i = 0; i < rating; i++) {
      result.push(<BsStarFill />);
    }

    return result;
  };

  return (
    <article className="testimonial-container">
      <div className="testimonial-top-row">
        <div
          className="testimonal-img"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />

        <div className="name-rating-col">
          <h4 className="card-title">{username}</h4>
          <div className="testimonial-stars-row">{renderStars(rating).map((item) => item)}</div>
        </div>
      </div>

      <div className="testimonial-description">{testimonial}</div>
    </article>
  );
};

export default TestimonialCards;
