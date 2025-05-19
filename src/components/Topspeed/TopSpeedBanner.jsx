
import '../../styles/Topspeed/TopSpeedBanner.css';

function TopSpeedBanner() {
    return (
        <div className="Topspeed-banner">
            {/* Dark overlay */}
            <div className="overlay"></div>

            {/* Content container */}
            <div className="content">
                <h2 className="title">
                    Top Speed Security <br />
                    <span className="highlight">
                        Services </span>
                </h2>

                <p className="description">
                    “TOP SPEED SECURITIES” is the pioneer and professional leaders for providing
                    end to end  ( security services and equipment’s) under one roof since 20 Years.
                </p>

                <div className="button-group">

                    <button className="btn-secondary">Contact Us</button>
                </div>
            </div>
        </div>
    );
}

export default TopSpeedBanner;
