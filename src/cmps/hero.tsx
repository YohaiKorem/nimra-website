import stockImg from '../assets/imgs/therapist-stock-photo.jpg'

function Hero() {
  return (
    <div className="hero full shadow">
      <img className="hero-img" src={stockImg} alt="" />
    </div>
  )
}

export default Hero
