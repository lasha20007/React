import React, {useState, useEffect} from 'react'

function Projects() {
    const gap = 16;
    const projects = 
    [
    'google.com', 'facebook.com', 'amazon.com', 
    'microsoft.com', 'juman.ge', 'kote.ge', 
    'netflix.com', 'tbc.ge', 'bog.ge', 'mercedes.com'
    ]

    const carousel = React.createRef();
    const content = React.createRef();
    const next = React.createRef();
    const prev = React.createRef();

    const [width,setWidth] = useState();

    const onNext = () =>{
        carousel.current.scrollBy(width + gap, 0);
        if (carousel.current.scrollWidth !== 0) {
            prev.current.style.display = "flex";
        }
        if (content.current.scrollWidth - width - gap <= carousel.current.scrollLeft + width) {
            next.current.style.display = "none";
        }
    }
    
    const onPrev = () =>{
        carousel.current.scrollBy(-(width + gap), 0);
        if (carousel.current.scrollLeft - width - gap <= 0) {
            prev.current.style.display = "none";
        }
        if (!content.current.scrollWidth - width - gap <= carousel.current.scrollLeft + width) {
            next.current.style.display = "flex";
        }
    }

    useEffect(()=>{
        setWidth(carousel.current.offsetWidth);
    }, [carousel])

    return (
    <div className='projects'>
      <h2>My Projects</h2>
      <div id="wrapper">
        <div id="carousel" ref={carousel}>
          <div id="content" ref={content}>
          {projects.map((e,i)=>
                  <div key={e} category-id={e} className='item'>{e}</div>
              )}
          </div>

        </div>
        <button id="prev" onClick={onPrev} ref={prev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 20 20"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
          </svg>
        </button>
        <button id="next" onClick={onNext} ref={next}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 20 20"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
          </svg>
        </button>
      </div>
    </div>
    )
}

export default Projects
