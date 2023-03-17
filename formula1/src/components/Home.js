import ferrariImg from '../assets/images/ferrari_car.jpg';

const Home = () => {
    return (
        <div className="container text-center">
            <div>Formula 1 Search Website</div>
            <img className="race_car_img" src={ferrariImg} width="450" height="450"/>
        </div>
    )
}

export default Home();