import ferrariImg from "../assets/images/ferrari_car.jpg";

const Home = () => {
  return (
    <div className="container text-center">
      <br />
      <div className="Logo">
        <h3>Formula 1 Information Website</h3>
      </div>
      <img className="img-fluid img-thumbnail" src={ferrariImg} alt="Car" />
      <div className="Logo2 mt-5">by Simon Stentoft Heegaard</div>
    </div>
  );
};

export default Home;
