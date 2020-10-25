import React from 'react';

const PackageComponent = (props) => {
    const {perks, level, trail, callback} = props
    return (
      <div className={`package-component-${trail}-${level}`}>
        <div className={`package-component-${trail}-${level}-top`}>
          <img className={`${trail}-${level}-price-label`} src={require(`../../../images/svg/price-label-level-${level}.svg`)} alt='price-label' height="67" width="176" />
          <input type="radio" className={`${trail}-${level}-radio`} id={`${trail}-${level}-button`} onChange={() => callback(level, trail)}/>
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
