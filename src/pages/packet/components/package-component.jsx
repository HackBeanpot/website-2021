import React from 'react';

const PackageComponent = (props) => {
    const {perks, level, trail} = props
    return (
      <div className={`package-component-${trail}-${level}`}>
        <ul className={`${trail}-${level}-list`}>
          {perks.map((perk, index) => {
            return (
              <p key={`${trail}-${level}-list-${index}`}> {perk} </p>
            )
          })}
        </ul>
      </div>
    )
}

export default PackageComponent;
