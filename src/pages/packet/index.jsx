import React from 'react';
import Layout from '../../components/layout';

export default () => (
  <Layout>
    <SponsorPacket/>
  </Layout>
)

class SponsorPacket extends React.Component {
  render() {
    return (
      <div className="packet">
        <section className="packet-header">
          <h1>
            why doesn't this show up I hate css
          </h1>
        </section>
      </div>
    );
  }
}
