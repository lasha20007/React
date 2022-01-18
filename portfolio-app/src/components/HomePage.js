import React from 'react'
import Projects from './Projects'

export default function HomePage() {
    return(
        <div className='homeContainer'>
            <section>
            <div className='banner'>
                <div className='infoContainer'></div>
                <h1>
                    Lasha Sulukhia's Portfolio
                </h1>
                <h3>+ some movies</h3>
            </div>
            </section>

            <section className='aboutMe'>
                <div className='aboutTitle'>About me</div>
                <div className='aboutInfo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id ligula ante. 
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                    Donec interdum quis arcu non mollis. Aliquam ultrices ligula nec 
                    nibh porta feugiat. Aliquam dictum erat mi, a dignissim sem laoreet ac. 
                    Pellentesque dolor quam, luctus ut ultricies a, ultricies in tellus. Fusce ac neque massa. 
                    Vivamus ac porta odio, sed fringilla eros. Proin in nulla lorem. Nunc id convallis elit.
                     Integer interdum sapien sed neque feugiat, eget laoreet mi volutpat. Integer egestas faucibus massa, 
                     eu posuere ex scelerisque vel.</div>
            </section>

            <section className='edu'>
                <div className="education">
                    <h3>Education</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>dictum erat mi, a dignissim sem</li>
                        <li>eget laoreet mi volutpat.</li>
                        <li>Integer egestas faucibus massa</li>
                    </ul>
                </div>
                <div className="or-spacer-vertical right">
                    <div className="mask"></div>
                </div>
                <div className="education">
                    <h3>Experience</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>dictum erat mi, a dignissim sem</li>
                        <li>eget laoreet mi volutpat.</li>
                        <li>Integer egestas faucibus massa</li>
                    </ul>
                </div>
            </section>

            <section>
                <Projects />
            </section>
        </div>
    )
}


