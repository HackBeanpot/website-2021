import React from 'react';

const PackageComponent = (props) => {
    const {perks, level, trail, callback} = props
    return (
      <div className={`package-component-${trail}-${level}`}>
        <input type="radio" name={trail} onChange={() => callback(level, trail)}/>
        <ul className={`list-${trail}-${level}`}>
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
