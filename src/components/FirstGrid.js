import React from 'react'

const FirstGrid = () => {
  return (
    <div className='first-grid'>
        <div className='image-transform'></div>
        <div className='content-under-egg'>
            <h1 className='egg-title'>Transform your brand</h1>
            <p className='egg-paragraph'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <p className='egg-learn-more'>LEARN MORE</p>
        </div>
        <div className='stand-out'></div>
        <div className='content-under-egg'>
            <h1 className='egg-title'>Stand out to the right audience</h1>
            <p className='egg-paragraph'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build an extend your brand in digital places.</p>
            <p className='egg-learn-more'>LEARN MORE</p>
        </div>
        <div className='graphic-design'>
            <div className='internal-content'>
                <h1 className='internal-title'>Graphic Design</h1>
                <p className='internal-paragraph'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
            </div>
        </div>
        <div className='photography'>
            <div className='internal-content'>
                <h1 className='second-internal-title'>Photography</h1>
                <p className='second-internal-paragraph'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
        </div>
    </div>
  )
}

export default FirstGrid;