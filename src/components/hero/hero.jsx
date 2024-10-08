import { useEffect } from 'react';
import './hero.css';
import arrow_btn from '../../assets/arrow_btn.png';
import play_icon from '../../assets/play_icon.png';
import pause_icon from '../../assets/pause_icon.png';

const Hero = ({ setPlayStatus, heroCount, setHeroCount, heroData, playStatus }) => {
    const handleExploreClick = () => {
        window.location.href = "/explore";
    };

    // Implementing auto slider - Called every time the hero count changes
    useEffect(() => {
        const timer = setInterval(() => {
            setHeroCount(prevCount => (prevCount + 1) % 3);
        }, 5000); // Change slide every 5 seconds

        // Clear timer on unmount
        return () => clearInterval(timer);
    }, [setHeroCount]);

    return (
        <div className='hero'>
            <div className='hero-text'>
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>

            <div className='hero-explore' onClick={handleExploreClick}>
                <p>Explore the Society</p>
                <img src={arrow_btn} alt="Explore" />
            </div>

            <div className='hero-dot-play'>
                <ul className="hero-dots">
                    <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
                </ul>
                <div className='hero-play'>
                    <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pause_icon : play_icon} alt="Play/Pause" />
                    <p>See the video</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
