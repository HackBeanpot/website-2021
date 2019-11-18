import React from 'react';
import GrowIcon from 'images/grow-icon';
import RecruitIcon from 'images/recruit-icon';
import InspireIcon from 'images/inspire-icon';

class SponsorLevel extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSponsorRow(levelContent, index) {
    let icon;
    if (levelContent.title === 'Engagement') {
      icon = <GrowIcon />;
    } else if (levelContent.title === 'Innovation') {
      icon = <InspireIcon />;
    } else if (levelContent.title === 'Recruitment') {
      icon = <RecruitIcon />;
    }

    return (
      <div key={`sponsor-level-${index}`} className="sponsor-level col-xl-12">
        {icon}
        <div className="sponsor-subtitle">{levelContent.title}</div>
        <div className="row sponsor-level-row">
          <div className="col-md-6 sponsor-level-description">
            {levelContent.description}
          </div>
          <div className="col-md-6">
            <div className="sponsor-level-quote">"{levelContent.quote}"</div>
            <br />
            <p className="sponsor-level-credit">{levelContent.credit}</p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.props !== undefined && this.props.content !== undefined) {
      return (
        <div className="row">
          {this.props.content.map((content, index) =>
            this.renderSponsorRow(content, index)
          )}
        </div>
      );
    } else {
      return '';
    }
  }
}

export default SponsorLevel;
