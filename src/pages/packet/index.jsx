import React, {useState} from 'react';
import CloudBackground from '../../images/svg/packet-cloud.svg'
import PacketStruct from './packet-structure.json'
import PackageComponent from './components/package-component'

export default () => (
  <SponsorPacket />
)

const SponsorPacket = () => {
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
          <div className='title'>
            <h1>
              Sponsor
            </h1>
            <h1>
              HBP 2021
            </h1>
            <img className="cloud-background" src={CloudBackground} alt=""/>
            <p className="cloud-text">
              At HackBeanpot, we aim to foster an inclusive community <br/> that
              welcomes students of any skill level to work together <br/> on
              engaging technical projects. By bringing local <br/>companies,
              organizers, and attendees together, <br/> HackBeanpot celebrates
              innovation and inclusion in Boston tech.
            </p>
          </div>
        </section>
        <section className='packet-struct'>
          {Object.keys(PacketStruct).map(trail => {
            const row = []
            {PacketStruct[trail].forEach((level, index) => {
              row.push(<PackageComponent trail={trail} level={index + 1} perks={level} callback={(level, trailType) => setTrail(level, trailType)}/>)
            })}

            return (
              <div className={`${trail}-row`}> { row } </div>
            )
          })}
        </section>
        <p> {build * 500 + recruit * 500 + engage * 500}</p>
      </div>
    );
}
