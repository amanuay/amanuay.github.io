
import { useState } from 'react';
import './App.css'
import Pattern from './pattern'
import { useScroll, useMotionValueEvent, useAnimate, motion } from 'framer-motion'
import Footer from './footer';

function App() {
  //'scope' is just a ref for framer.
  const [scope, animate] = useAnimate();
  const [scrollpercent, setscrollpercent] = useState('');
  const { scrollYProgress } = useScroll(
    {
      target: scope,
      offset: ["start start", "end end"]
    }
  );

  useMotionValueEvent(scrollYProgress, 'change', (val) => setscrollpercent(`${val * -100}%`));

  return (
    <>
      <div className='landing'>
        <div className="section1">
          <Pattern />
          <div className="hero">
            <h1>Hi, I'm Amanuay</h1>
            <p>full-stack web developer based in Bengaluru, India</p>
          </div>
        </div>

        <div className="section2">
          <h4>I Design & Develop <a href='https://github.com/amanuay' target="_blank">websites and apps<span>&#x2197;</span></a>, among <a href='https://www.behance.net/amanuay' target="_blank"><i>other things<span>&#x2197;</span>.</i></a></h4>
          {/* <div className='links'>
          <a href='#'>github</a>
          <a href='#'>behance</a>
        </div> */}

        </div>
        <div className='links'>
          <a href='https://github.com/amanuay' target="_blank">github<span>&#x2197;</span></a>
          <a href='https://www.behance.net/amanuay' target="_blank">behance<span>&#x2197;</span></a>
        </div>

        <div className="section3">
          <h4>Thanks for checking out my website :)</h4>
        </div>

        <p>This is where I tinker with random stuff.</p>

        <div className="section4" ref={scope}>
          <div className='motion-container' style={{
            display: 'flex',
            position: 'sticky',
            top: '0',
            width: '100vw',
            overflow: 'hidden',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            height: '100vh',
          }}>
            <motion.div style={{
              translateX: scrollpercent,


              width: 'fit-content',
              textWrap: 'nowrap'
            }}>
              <h1 id='scroller' style={{ paddingLeft: '10vw' }}> Scrolling sideways for a bit because, why not? Everyone's doing it for some reason.</h1>
            </motion.div>
          </div>

          <div className="marquee">
            <h4> Someone deprecated the good old html &lt;marquee&gt; so implementing it with CSS.
              Someone deprecated the good old html &lt;marquee&gt; so implementing it with CSS.
              Someone deprecated the good old html &lt;marquee&gt; so implementing it with CSS.
              Someone deprecated the good old html &lt;marquee&gt; so implementing it with CSS.</h4>
          </div>
        </div>

        <div className="section5">
          <h4>Want to build something together?</h4>
        </div>

        <div className="section6">
          <a href='mailto:amanuay@gmail.com'><h4>Get in touch<span>&#x2197;</span></h4></a>
          <p>amanuay@gmail.com</p>
        </div>
        <Footer />
      </div >
    </>
  )
}

export default App








