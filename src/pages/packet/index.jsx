import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import PackageRow from './components/packet-row';
import useIsMobile from './components/useIsMobile';
import BaseCheck from '../../images/svg/packet-base-check.svg'
import PacketStruct from '../../data/packet-structure.json'
import SelectionArrow from '../../images/svg/packet-selection-arrow.svg'
import WhiteLogo from '../../images/svg/moon-logo.svg'
import FooterArrow from '../../images/svg/packet-footer-arrow.svg'
import '../../styles/main.scss';

export default () => (
  <SponsorPacket />
)

const Template = ({ build, engage, network, PRICE_OF_PACKAGE }) => {
  const newline = '%0d%0a%0d%0a';

  return `
Hi, I am [your name] from [your company] and we are interested in:${newline}
    Base: $750${newline}
    Level ${build} Build: $${PRICE_OF_PACKAGE*build}${newline}
    Level ${engage} Engage: $${PRICE_OF_PACKAGE*engage}${newline}
    Level ${network} network: $${PRICE_OF_PACKAGE*network}${newline}
    Total: $${750 + build * PRICE_OF_PACKAGE + network * PRICE_OF_PACKAGE + engage * PRICE_OF_PACKAGE}${newline}
Best,${newline}
[Your name]
  `
}

const PacketFooter = ({ build, engage, network, isMobile }) => {
  const PRICE_OF_PACKAGE = 375

  const openMailClient = () => {
    const subjectLine = "Interest in Sponsorship for HackBeanpot 2021"
    const body = Template({ build, engage, network, PRICE_OF_PACKAGE });
    window.location.href = `mailto:team@hackbeanpot.com?subject=${subjectLine}&body=${body}`
  }

  return (
    <section className='packet-footer'>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey='0'>
            <img src={FooterArrow} alt='footer arrow' className='footer-arrow'/>
            <div className='running-total-div'>
              <p>Running Total</p>
              <p>${750 + build * PRICE_OF_PACKAGE + network * PRICE_OF_PACKAGE + engage * PRICE_OF_PACKAGE}</p>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>
              <div className='footer-total-list'>
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
                <div className='network-line'>
                  <p className='footer-list-type-network'>The Network Package</p>
                  <p>${network * PRICE_OF_PACKAGE}</p>
                </div>
              </div>
              <div className='send-selection-div'>
                <div className='get-in-touch-text'>Let's get in touch!</div>
                <div className='send-selection-button' onClick={openMailClient}>
                  Send us your selection
                  {!isMobile && <img className='selection-arrow' src={SelectionArrow} alt='Selection arrow'/>}
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </section>
  )
}


const BasePackage = ({ isMobile }) => (
  <div className='base-div-pack packet-tier'>
    <div className='base-intro'>
      <div className='base-headline'>
        {!isMobile && <div className={`base-circle`}>0</div>}
        Base Package
      </div>
      {isMobile && <div className='base-description'>{PacketStruct["descriptions"]["base"]}</div>}
    </div>
    <div className='base-box'>
      <div className='base-box-price-check'>
        $750
        {!isMobile && <img className='base-box-check-mark' src={BaseCheck} alt='Base package check mark' height='42' width='42'/>}
      </div>
      <ul className={`list-base-package`}>
        {PacketStruct["base"].map((perk, index) => {
          return <p key={`list-base-${index}`}> {perk} </p>
        })}
      </ul>
      {isMobile && <div className='base-box-button-mobile'>Required</div>}
    </div>
  </div>
)

const SponsorPacket = () => {
  const [build, setBuild] = useState(0);
  const [engage, setEngage] = useState(0);
  const [network, setNetwork] = useState(0);
  const isMobile = useIsMobile();

  const setTrail = (level, trailType) => {
    if (trailType === 'build') {
      setBuild(level)
    } else if (trailType === 'engage') {
      setEngage(level)
    } else if (trailType === 'network') {
      setNetwork(level)
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
      {isMobile && <section className='packet-header'>
        <img className='mobile-header-logo' src={WhiteLogo} alt='white logo' />
      </section>}
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
            Each sponsor package starts with the <span style={{ fontWeight: "bold" }}>base tier</span>. We also
            have <span style={{ fontWeight: "bold" }}>three
              optional trails</span> designed to focus on different sponsorship goals,
            each with multiple tiers of perks to choose from. <br/> <br/>
            It’s that simple! As always, please contact us at
            <a className='email' href="mailto:team@hackbeanpot.com" target="_blank"
               rel="noopener noreferrer"> team@hackbeanpot.com </a>
            with any questions, or if you are interested in an alternative form of sponsorship.
          </p>
        </div>
      </section>
      <section className='packet-struct'>
        <BasePackage isMobile={isMobile}/>

        {Object.keys(PacketStruct["trails"]).map(trail => {
          return <PackageRow
            trail={trail}
            build={build}
            engage={engage}
            network={network}
            removeOptionChecked={(trail) => removeOptionChecked(trail)}
            setTrail={(level, trail) => setTrail(level, trail)}
            isMobile={isMobile}
          />
        })}
      </section>
      <PacketFooter build={build} engage={engage} network={network} isMobile={isMobile}/>
    </div>
  );
}

