import React from 'react';

class PackageComponent extends React.Component {
  render() {
    const perks = this.props.perks
    return (
      <div className={`${this.props.trail}-${this.props.level}`}>
        <ul className={`${this.props.trail}-${this.props.level}-list`}>
          {perks.map((perk, index) => {
            return (
              <p key={`${this.props.trail}-${this.props.level}-list-${index}`}> {perk} </p>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default PackageComponent;
