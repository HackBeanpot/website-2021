import React, {useState} from 'react';
import MoonLogo from '../../images/svg/moon-logo.svg'
import BaseCheck from '../../images/svg/packet-base-check.svg'
import PacketStruct from '../../data/packet-structure.json'
import PackageComponent from './components/package-component'

export default () => (
  <SponsorPacket />
)

/* TODO:
  - Background (ie. flashlight, mountains, tent, etc) => so I just import and then...?
  - Intro text => CSS for location and moon logo thing
  - PackageComponent => styling for button, price wood plaque thing
  - Footer => waiting on design
 */

const SponsorPacket = () => {
  const PRICE_OF_PACKAGE = 375
  const [build, setBuild] = useState(0);
  const [engage, setEngage] = useState(0);
  const [recruit, setRecruit] = useState(0);

  const setTrail = (level, trailType) => {
    if (trailType === 'build') {
      setBuild(level)
    } else if (trailType === 'engage') {
      setEngage(level)
    } else if (trailType === 'recruit') {
      setRecruit(level)
    }
  }

  return (
      <div className="packet">
        <section className="packet-cover">
          <div className='intro-div'>
            <img className='moon-logo' src={MoonLogo} alt='HBP logo moon' height='257.89' width='251'/>
            <h1 className='intro-title'>Sponsor HBP 2021</h1>
            <p className="intro-text">
              At HackBeanpot, we aim to foster an inclusive community that
              welcomes students of any skill level to work together on
              engaging technical projects. By bringing local companies,
              organizers, and attendees together, HackBeanpot celebrates
              innovation and inclusion in Boston tech.
            </p>
          </div>
          <div className='packet-blurb'>
            <h1 className='packet-title'> Our Packet </h1>
            <p className='packet-text'>
              Each sponsor package starts with the base tier. We also have three
              optional trails designed to focus on different sponsorship goals,
              each with multiple tiers of perks to choose from. <br/> <br/>
              It’s that simple! As always, please contact us at
              <a className='email' href="mailto:team@hackbeanpot.com" target="_blank" rel="noopener noreferrer"> team@hackbeanpot.com </a>
              with any questions, or if you are interested in an alternative form of sponsorship.
            </p>
          </div>
        </section>
        <section className='packet-struct'>
          <div className='base-package'>
            <div className='base-headline'>
              <div className={`base-circle`}>0</div>
              Review the Base Package
            </div>
            <div className='base-box'>
              <div className='base-box-price-check'>
                $750
                <img src={BaseCheck} alt='Base package check mark' height='42' width='42'/>
              </div>
              <ul className={`list-base-package`}>
                {PacketStruct["base"].map((perk, index) => {
                  return <p key={`list-base-${index}`}> {perk} </p>
                })}
              </ul>
            </div>
          </div>
          {Object.keys(PacketStruct["trails"]).map(trail => {
            const row = []
            PacketStruct["trails"][trail].forEach((level, index) => {
              row.push(<PackageComponent className={`row-${trail}-${level}`} trail={trail} level={index + 1} perks={level} callback={(level, trailType) => setTrail(level, trailType)}/>)
            })

            // TODO: convert from just 1 to 1-3
            return (
              <div className={`${trail}-div`}>
                <div className={`${trail}-headline`}>
                  <div className={`${trail}-circle`}>1</div>
                  {`Select your ${trail.charAt(0).toUpperCase() + trail.slice(1)} Package`}
                </div>
                <div className={`${trail}-row`}> { row } </div>
              </div>
            )
          })}
        </section>
        <section className='footer'>
          <p> Running Total {750 + build * PRICE_OF_PACKAGE + recruit * PRICE_OF_PACKAGE + engage * PRICE_OF_PACKAGE}</p>
        </section>
      </div>
    );
}
