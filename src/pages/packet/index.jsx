import React, {useState} from 'react';
import PacketStruct from '../../data/packet-structure.json'
import PackageComponent from './components/package-component'

export default () => (
  <SponsorPacket />
)

const SponsorPacket = () => {
  const PRICE_OF_PACKAGE = 375
  const [build, setBuild] = useState(0);
  const [engage, setEngage] = useState(0);
  const [recruit, setRecruit] = useState(0);

  // TODO: make this not just an if statement lol
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
            <h1 className='intro-title'>Sponsor HBP 2021</h1>
            <p className="intro-text">
              At HackBeanpot, we aim to foster an inclusive community <br/> that
              welcomes students of any skill level to work together <br/> on
              engaging technical projects. By bringing local <br/>companies,
              organizers, and attendees together, <br/> HackBeanpot celebrates
              innovation and inclusion in Boston tech.
            </p>
          </div>
          <div className='packet-intro'>
            <h1 className='packet-title'> Our Packet </h1>
            <p className='packet-text'>
              Each sponsor package starts with the base tier. We also have three
              optional trails designed to focus on different sponsorship goals,
              each with multiple tiers of perks to choose from. <br/>
              It’s that simple! As always, please contact us at
              team@hackbeanpot.com with any questions, or if you are interested
              in an alternative form of sponsorship.
            </p>
          </div>
        </section>
        <section className='packet-struct'>
          <div className='base-package'>
            <p className='base-intro'>Review the Base Package</p>
            <div className='base-box'>
              $750
              <ul className={`list-base-package`}>
                {PacketStruct["base"].map((perk, index) => {
                  return <p key={`list-base-${index}`}> {perk} </p>
                })}
              </ul>
            </div>
          </div>
          {Object.keys(PacketStruct["trails"]).map(trail => {
            const row = []
            {PacketStruct["trails"][trail].forEach((level, index) => {
              row.push(<PackageComponent className={`row-${trail}-${level}`} trail={trail} level={index + 1} perks={level} callback={(level, trailType) => setTrail(level, trailType)}/>)
            })}

            return (
              <div className={`${trail}-div`}>
                <p className={`${trail}-intro`}>{`Select your ${trail} Package`}</p>
                <div className={`${trail}-row`}> { row } </div>
              </div>
            )
          })}
        </section>
        <section className='footer'>
          <p> Running Total {build * PRICE_OF_PACKAGE + recruit * PRICE_OF_PACKAGE + engage * PRICE_OF_PACKAGE}</p>
        </section>
      </div>
    );
}
