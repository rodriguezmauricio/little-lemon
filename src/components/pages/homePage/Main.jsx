import "./main.css";
import Button from "../../button/Button";
import cardsContent from "../../../data/cardsContent";
import Cards from "../../cards/Cards";
import testimonialsContent from "../../../data/testimonialsContent";
import TestimonialCards from "../../testimonialCards/TestimonialCards";

const Main = () => {
  return (
    <main>
      {/* HERO SECTION BEGIN */}
      <section className="page-section hero">
        <div className="container">
          <div className="hero-left">
            <div className="text">
              <h1 className="subtitle">Little Lemon</h1>
              <h3 className="hightlight">Chicago</h3>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptates qui
              explicabo dolores earum quae ullam libero eligendi tatibus iusto incidunt autem?
            </p>
            <a href="/">
              <Button>Reserve a table</Button>
            </a>
          </div>
          <div className="hero-right"></div>
        </div>
      </section>
      {/* HERO SECTION END */}

      {/* SPECIALS SECTION BEGIN */}
      <section className="page-section specials-section">
        <div className="container">
          <header className="specials-header">
            <h2 className="subtitle">This weeks specials!</h2>
            <Button>Online menu</Button>
          </header>

          <div className="special-cards-row">
            {cardsContent.map((card) => {
              return (
                <div className="special-card-container">
                  <Cards
                    title={card.title}
                    alt={card.alt}
                    description={card.description}
                    img={card.img}
                    link={card.link}
                    price={card.price}
                    key={card.title}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* SPECIALS SECTION END */}

      {/* TESTIMONIALS SECTION BEGIN */}
      <section className="page-section testimonials-section">
        <div className="container">
          <header>
            <h2 className="subtitle">Testimonial</h2>
          </header>

          <div className="testimonial-cards-row">
            {testimonialsContent.map((card) => {
              return (
                <div className="testimonial-card-container">
                  <TestimonialCards
                    username={card.username}
                    img={card.img}
                    rating={card.rating}
                    testimonial={card.description}
                    key={card.title}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* TESTIMONIALS SECTION END */}

      {/* ABOUT SECTION BEGIN */}
      <section className="page-section about-section">
        <div className="container">
          <div className="about-left">
            <h2 className="subtitle">Little Lemon</h2>
            <h3 className="hightlight">Chicago</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore delectus optio
              nostrum eligendi, qui obcaecati! Doloribus repudiandae molestiae harum laboriosam
              officiis quas magnam ex, aspernatur ullam minus, reprehenderit mollitia perferendis?
            </p>
          </div>

          <div className="about-right">
            <div className="about-img-one" />
            <div className="about-img-two" />
          </div>
        </div>
      </section>
      {/* ABOUT SECTION END */}
    </main>
  );
};

export default Main;
