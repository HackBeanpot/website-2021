import React from 'react';
import Layout from '../../components/layout';

import BasicLeaf from 'images/svg/basic-leaf';

export default () => (
  <Layout>
    <CodeOfConduct />
  </Layout>
);

const CodeOfConduct = () => (
  <div className="coc">
    <span className="coc__leaf">
      <BasicLeaf />
    </span>
    <h1 className="coc__heading">HackBeanpot 2021 Code of Conduct</h1>
    <div className="coc__body">
      <p>
        The HackBeanpot team is dedicated to providing a safe, harassment-free 
        experience for everyone, regardless of gender, age, sexual orientation, 
        disability, physical appearance, body size, race, ethnicity, 
        nationality, religion, previous hackathon attendance, or computing 
        experience (or lack of any of the aforementioned). We do not tolerate 
        harassment of hackathon participants in any form. Harassment includes, 
        but is not limited to: offensive comments, sexual language or imagery, 
        deliberate intimidation, stalking, harassive photography or recording, 
        sustained general disruption, and unwelcome sexual attention. 
      </p>
      <p>
        Harassment is not tolerated in any part of the hackathon, including 
        within our virtual spaces, as a part of hackathon projects created 
        at the event, or on social media. Hackathon attendees, sponsors, judges, 
        mentors, organizers, and all other individuals at HackBeanpot 2021 are 
        subject to this Code of Conduct. Individuals violating these rules 
        may be warned, disqualified, or expelled from the hackathon at the 
        discretion of the Event Staff.      
      </p>
      <p>
        Participants asked to stop any harrassive behavior are expected to comply 
        immediately. If a participant engages in such behavior during, 
        before, or after the event, the Event Staff may take any action they 
        deem appropriate, including warning the offender, expelling them from 
        the hackathon, removing them from the virtual premises, or excluding them 
        from any and all future events.
      </p>
      <p>
        If you are being harassed, notice that someone else is being harassed, 
        or have any other concerns, please contact a member of the Event Staff 
        immediately. Event Staff will be happy to help participants contact 
        appropriate law enforcement or otherwise assist those experiencing 
        harassment to feel safe for the duration of the hackathon. We value you.
      </p>
      <br />

      <p className="coc__subheading">How to reach event staff:</p>
      <p>
        <b>Before and after the event via email: </b>
        to <a href="mailto:team@hackbeanpot.com">team@hackbeanpot.com</a>
      </p>
      <p>
        <b>During the event via Slack: </b>
        You can post in #ask-an-organizer or DM an Event Staff member (individuals with [Organizer] in their display name).
      </p>
    </div>
  </div>
);
