import './Header.css'

export function Header() {
    return (
        <div className="header--container">
            <div className="header--row header">
                {/* Title + Logo */}
                <div className="header--column">
                    <div className='header--row logo-title'>
                        <img src="/images/ocean-logo.svg" alt="" />
                        <div className="title--text">Cholula Psychological</div>
                    </div>
                </div>

                {/* Nav Bar */}
                <div className='header--column'>
                    <nav className="header--row gap text-m">
                        <p>Home</p>
                        <p>About</p>
                        <p>Service</p>
                        <p>Testimonials</p>
                        <p>Contact</p>
                    </nav>
                </div>

                <div className="header--column">
                    <button className="button--quick-click text-m" type="button">Book Appointment</button>
                </div>
            </div>
        </div>
    )
}