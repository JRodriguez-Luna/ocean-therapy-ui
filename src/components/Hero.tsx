import './Hero.css'
import { Button } from './Button'

export function Hero() {
    return (
        <div className="hero--container">
            <div className="img-display">
                <img className="hero--img" src="/images/ocean-bg.svg" alt="" />
            </div>
            <div className="text-img hero--column-half">
                <div className="hero--row">
                    <h1 className='welcome-title'>Welcome to Cholula Psychological Services</h1>
                </div>
                <div className='hero--row'>
                    <p>Helping you navigate life's waves with compassion and expertise</p>
                </div>
                <div className='hero--row'>
                    <Button>Book Now</Button>
                    <Button style={{borderColor: 'white'}}>Learn More</Button>
                </div>
            </div>
        </div>
    )
}