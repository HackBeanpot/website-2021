import React from 'react'
import PacketCheck from '../../../images/svg/packet-check.js'

const checkColors = {
  "build": '#E56138',
  "engage": "#CCAD0D",
  "recruit": "#52C2C2"
}

const PackageComponent = ({ perks, level, trail, callback, selected }) => {
  const comp_perks = perks !== undefined ? perks : [];
  const comp_level = level !== undefined ? level : 1;

  return (
    <label for={`${trail}-${level}-button`}
           className={`packet-box package-component-${trail} packet-level-${level} ${selected ? 'packet-box-selected' : ''}`}>
      <img className={`packet-price-label`} src={require(`../../../images/svg/price-label-level-${comp_level}.svg`)}
           alt='price-label' height="67" width="176"/>
      <input type="radio" className={`packet-radio`}
             id={`${trail}-${level}-button`}
             onChange={() => callback(level, trail)} checked={selected}/>
      {
        selected ?
          <div className="packet-box-radio-checked">
            <PacketCheck className="packet-box-check" shadowColor={checkColors[trail]}/>
          </div> :
          <div className="packet-box-radio-unchecked"/>
      }
      <ul className={`list-${trail}-${level}`}>
        {comp_perks.map((perk, index) => {
          return (
            <p key={`${trail}-${level}-list-${index}`}> {perk} </p>
          )
        })}
      </ul>
    </label>
  )
}

export default PackageComponent
