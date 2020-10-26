import React, {useState} from 'react';
import BaseCheck from '../../images/svg/packet-base-check.svg'
import PacketStruct from '../../data/packet-structure.json'
import PackageComponent from './components/package-component'
import SelectionArrow from '../../images/svg/packet-selection-arrow.svg'

export default () => (
  <SponsorPacket />
)

/* TODO:
  - Background => sizing (especially at the bottom)
 */

const PacketFooter = ({ build, engage, recruit }) => {
  const PRICE_OF_PACKAGE = 375

  const openMailClient = () => {
    const subjectLine = "Interest in Sponsorship for HackBeanpot 2021"
    const body = `Base + Level ${build} Build + Level ${engage} Engage + Level ${recruit} Recruit`
    window.location.href = `mailto:team@hackbeapot.com?subject=${subjectLine}&body=${body}`
  }

  return (
    <section className='footer'>
      <div className='footer-total-list'>
        <div className='running-total-div'>
          <p>Running Total</p>
          <p>${750 + build * PRICE_OF_PACKAGE + recruit * PRICE_OF_PACKAGE + engage * PRICE_OF_PACKAGE}</p>
        </div>
        <div className='base-line'>
          <p className='footer-list-type-total'>The Base Package</p>
          <p>$750</p>
        </div>
        <div className='build-line'>
          <p className='footer-list-type-build'>The Build Package</p>
          <p>${build * PRICE_OF_PACKAGE}</p>
        </div>
        <div className='engage-line'>
          <p className='footer-list-type-engage'>The Engage Package</p>
          <p>${engage * PRICE_OF_PACKAGE}</p>
        </div>
        <div className='recruit-line'>
          <p className='footer-list-type-recruit'>The Recruit Package</p>
          <p>${recruit * PRICE_OF_PACKAGE}</p>
        </div>
      </div>
      <div className='send-selection-div'>
        <div className='get-in-touch-text'>Let's get in touch!</div>
        <div className='send-selection-button' onClick={openMailClient}>
          Send us your selection
          <img className='selection-arrow' src={ SelectionArrow } alt='Selection arrow'/>
        </div>
      </div>
    </section>
  )
}

const BasePackage = () => (
  <div className='base-package'>
    <div className='base-headline'>
      <div className={`base-circle`}>0</div>
      Review the Base Package
    </div>
    <div className='base-box'>
      <div className='base-box-price-check'>
        $750
        <img className='base-box-check-mark' src={BaseCheck} alt='Base package check mark' height='42' width='42'/>
      </div>
      <ul className={`list-base-package`}>
        {PacketStruct["base"].map((perk, index) => {
          return <p key={`list-base-${index}`}> {perk} </p>
        })}
      </ul>
    </div>
  </div>
)


const SponsorPacket = () => {
  const TRAILS_LIST = ["build", "engage", "recruit"];

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

  const removeOptionChecked = (trail) => {
    setTrail(0, trail);
    for (let i = 1; i <= 3; i++) {
      document.getElementById(`${trail}-${i}-button`).checked = false;
    }
  }

  return (
      <div className="packet">
        <section className="packet-cover">
          <div className='intro-div'>
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
          <BasePackage />

          {Object.keys(PacketStruct["trails"]).map(trail => {
            const row = []
            const selectedLevel = trail === "build" ? build : trail === "engage" ? engage : recruit
            PacketStruct["trails"][trail].forEach((level, index) => {
              row.push(<PackageComponent className={`row-${trail}-${level}`} trail={trail} level={index + 1} key={`${trail}-${level}`}
                                         perks={level} callback={(level, trailType) => setTrail(level, trailType)}
                                         selected={selectedLevel === index + 1}/>)
            })

            return (
              <div className={`${trail}-div-pack`}>
                <div className={`packet-headline ${trail}-headline`}>
                  <div className={`${trail}-circle`}>{TRAILS_LIST.findIndex((elem) => elem===trail) + 1}</div>
                  {`Select your ${trail.charAt(0).toUpperCase() + trail.slice(1)} Package`}

                  <div className={`${trail}-opt-out-button`} onClick={() => removeOptionChecked(trail)}>
                    Clear selection
                  </div>
                </div>
                <div className={`${trail}-row`}> { row } </div>
              </div>
            )
          })}
        </section>
        <PacketFooter build={build} engage={engage} recruit={recruit} />
      </div>
    );
}
