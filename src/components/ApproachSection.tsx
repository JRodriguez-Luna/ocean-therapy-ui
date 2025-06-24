import './ApproachSection.css'
import { Button } from './Button'

export function ApproachSection() {
    return (
        <div className="approach--container">
           <div className='approach--row gap'>
                <div className='approach--column-half'>
                    <img className='approach--img' src="images/ocean-view.svg" alt="ocean-view" />
                </div>
                <div className='approach--column-half spacing'>
                    <h2 className='title'>Our Approach</h2>
                    <p className='text-base'>
                        At Cholula Psychological Services, we believe in creating a safe harbor where you can explore your thoughts and feelings. Our evidence-based approaches are delivered with warmth and understanding, recognizing that each person's journey is unique. Like the ever-changing ocean, we adapt our therapeutic approaches to meet your individual needs.
                    </p>
                    <p className='text-base'>
                        Our team of licensed professionals is committed to providing compassionate care that empowers you to navigate life's challenges with confidence and resilience.
                    </p>

                    <div className='approach--row'>
                        <Button className='hover--effect' variant='inverted'>Learn More</Button>
                        <Button className='hover--effect' variant='inverted-outline'>Meet Our Team</Button>
                    </div>
                </div>
           </div>
        </div>
    )
}