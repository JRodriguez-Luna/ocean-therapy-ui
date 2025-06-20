export function Header() {
    return (
        <div className="home--container">
            <div className="home--row header">
                {/* Title + Logo */}
                <div className="home--column">
                    <div className='home--row logo-title'>
                        <img src="/images/ocean-logo.svg" alt="" />
                        <div className="title--text">Cholula Psychological</div>
                    </div>
                </div>

                {/* Nav Bar */}
                <div className='home--column'>
                    <nav className="home--row gap text-m">
                        <p>Home</p>
                        <p>About</p>
                        <p>Service</p>
                        <p>Testimonials</p>
                        <p>Contact</p>
                    </nav>
                </div>

                <div className="home--column">
                    <button className="button--quick-click text-m" type="button">Book Appointment</button>
                </div>
            </div>
        </div>
    )
}