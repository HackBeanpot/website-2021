import React from 'react';

class PackageComponent extends React.Component {
  render() {
    return (
      <div className={`${this.props.trail}-${this.props.level}`}>
        {this.props.perks}
      </div>
    )
  }
}

export default PackageComponent;
