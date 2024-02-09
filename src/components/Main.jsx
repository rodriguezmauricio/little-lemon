import Button from "./button/Button";
import "./main.css";
import cardsContent from "../data/cardsContent";
import Cards from "./cards/Cards";

const Main = () => {
  return (
    <main>
      <section className="page-section hero">
        <div className="container">
          <div className="hero_left">
            <div className="text">
              <h1 className="subtitle">
                <span>Little Lemon</span>
              </h1>
              <h3 className="hightlight">Chicago</h3>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptates qui
              explicabo dolores earum quae ullam libero eligendi tatibus iusto incidunt autem?
            </p>
            <Button>Reserve a table</Button>
          </div>
          <div className="hero_right"></div>
        </div>
      </section>

      <section className="page-section specials-section">
        <div className="container">
          <header>
            <h2 className="subtitle">This weeks specials!</h2>
            <Button>Online menu</Button>
          </header>

          <div className="special-cards-row">
            {cardsContent.map((card) => {
              return (
                <Cards
                  title={card.title}
                  alt={card.alt}
                  description={card.description}
                  img={card.img}
                  link={card.link}
                  price={card.price}
                  key={card.title}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
