import React from 'react';

const PackageComponent = (props) => {
    const {perks, level, trail, callback} = props
    return (
      <div className={`package-component-${trail}-${level}`}>
        <div className={`package-component-${trail}-${level}-top-line`}>
          <div className='price-sign'>
            {375 * level}
          </div>
          <input type="radio" name={trail} id={`${trail}-${level}-button`} onChange={() => callback(level, trail)}/>
        </div>
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
