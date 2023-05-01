import './index.scss'
import LogoS from '../../../src/assets/images/developer-home.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 2,
        opacity: 1,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 3,
        duration: 3,
      }
    )
  }, [])


  return (
    <div className="logo-container" ref={bgRef}>
      <img className="solid-logo" ref={solidLogoRef} src={LogoS} alt="S" />
    </div>
  )
}

export default Logo
