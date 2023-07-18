import React from 'react'
import './App.css'

import image1 from "./images/spotify-stats/1.png"
import image2 from "./images/spotify-stats/2.png"
import image3 from "./images/spotify-stats/3.png"
import image4 from "./images/spotify-stats/4.png"
import image5 from "./images/spotify-stats/5.png"
import githubIcon from "./images/github.svg"

export default function SpotifyStats() {
    return (
        <div className='spotifyStatsPage'>
            <h1 style={{ textAlign: 'center', marginTop: '3%', marginBottom: '3%' }}>Spotify Latest</h1>
            <a className="github-link" href="https://github.com/WestheadJ/spotifyLatestRelease/tree/main"><img src={githubIcon} style={{ width: '24px', height: "24px" }} alt="github icon" />View On GitHub</a>
            <div id='spotifySectionOne'>
                <div>
                    <h2>Summary</h2>
                </div>
                <div >
                    <p>I built this single paged application with <a style={{ color: '#5e585d' }} href='https://reactjs.org'>React.js</a> and using the <a style={{ color: '#5e585d' }} href='https://developer.spotify.com/dashboard/'>Spotify API</a>. Spotify keeps user stats on their most recent artists and songs. So I have used the <a style={{ color: '#5e585d' }} href='https://developer.spotify.com/dashboard/'>Spotify API</a> to fetch this information and display to the user.</p>
                </div>
            </div>
            <div id='spotifySectionTwo'>
                <div>
                    <h2 style={{ textAlign: 'right' }}>How it Works</h2>
                </div>
                <div >
                    <p style={{ textAlign: 'right' }}>So using <a style={{ color: '#5e585d' }} href='https://reactjs.org'>React.js</a> it is only one page, the user has to login with a token that is generated when the page is loaded using the <a className='code-snippet-link' href='https://reactjs.org/docs/hooks-effect.html'><i className='code-snippet'>useEffect()</i></a> hook that is built into <a style={{ color: '#5e585d' }} href='https://reactjs.org'>React.js</a> .</p>
                    <p style={{ textAlign: 'right' }}>They can then click any button that they would like to carry out which ever function they would like to carry out. So for example if a user wanted to see the latest releases that Spotify make available. It fetches the information from the <a style={{ color: '#5e585d' }} href='https://developer.spotify.com/dashboard/'>Spotify API</a> and displays it in a format that is responsive.
                    </p>
                    <p style={{ textAlign: 'right' }}>It displays the data using the <a className='code-snippet-link' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'><i className='code-snippet'>.map</i></a> method which returns the HTML and it's styled to display it in a grid style, using flexbox styling and a little bit of setting the size of the image containers.</p>
                </div>
            </div>
            <div id='spotifySectionThree'>
                <h2>Some Screenshots Of The UI</h2>
                <div id='spotifyStatsImages'>
                    <div id='image-1'>
                        <img src={image1} alt="Screenshot of login screen" />
                    </div>
                    <div id="image-2">
                        <img src={image2} alt="Screenshot of main menu" />
                    </div>
                    <div id='image-3'>
                        <img src={image3} alt="Screenshot of spotify latest releases" />
                    </div>
                    <div id='image-4'>
                        <img src={image4} alt="Screenshot of the users top artists" />
                    </div>
                    <div id='image-5'>
                        <img src={image5} alt="Screenshot of the users top albums" />
                    </div>
                </div>
            </div>
        </div>
    )
}
