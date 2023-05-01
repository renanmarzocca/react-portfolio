import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return () => setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])


    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>Lorem ipsum dolor sit amet. Non pariatur enim non enim rerum et omnis alias. Et molestias galisum ut assumenda dolorum sit sunt nulla. Vel dolorum saepe cum itaque saepe qui architecto doloribus aut ratione repudiandae eum molestiae quia qui tempore delectus. Ut error repudiandae eum quia totam et excepturi praesentium ea dolorem nemo ut quia voluptate!</p>
                <p>Aut iste possimus nam temporibus quia ut corrupti quia ex ullam harum ut eaque repudiandae. Vel architecto recusandae est galisum corporis vel provident dolores eum molestiae sint? Eos maiores numquam qui eligendi magni est ipsum laudantium et fuga placeat et dolorum iste.</p>
                <p>Eos atque enim sit officiis voluptas sed excepturi rerum. At impedit itaque sit nihil internos id dolor dignissimos et dolor suscipit vel voluptatem doloremque!</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>

        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About