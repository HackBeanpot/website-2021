import React from 'react';
import CloudBackground from '../../images/svg/packet-cloud.svg'

export default () => (
  <SponsorPacket />
)

class SponsorPacket extends React.Component {
  render() {
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
      </div>
    );
  }
}
