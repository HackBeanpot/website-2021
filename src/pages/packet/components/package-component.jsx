import React from 'react'
import PacketCheck from '../../../images/svg/packet-check.js'

const checkColors = {
  "build": '#E56138',
  "engage": "#CCAD0D",
  "recruit": "#52C2C2"
}

const PackageComponent = ({ perks, level, trail, setTrail, selected, isMobile, removeOptionChecked }) => {
  const comp_perks = perks !== undefined ? perks : [];
  const comp_level = level !== undefined ? level : 1;

  return (
    <label htmlFor={`${trail}-${level}-button`}
           className={`packet-box package-component-${trail} packet-level-${level} ${selected ? 'packet-box-selected' : ''}`}>
      {!isMobile ?
        <img className={`packet-price-label`} src={require(`../../../images/svg/price-label-level-${comp_level}.svg`)}
             alt='price-label' height="67" width="176"/>
        : <div className={'packet-price-mobile'}>${375 * level}</div>}
      {!isMobile && <input type="radio" className={`packet-radio`}
                           id={`${trail}-${level}-button`}
                           onChange={() => setTrail(level, trail)} checked={selected}/>}
      {
        !isMobile && (selected ?
          <div className="packet-box-radio-checked">
            <PacketCheck className="packet-box-check" shadowColor={checkColors[trail]}/>
          </div> :
          <div className="packet-box-radio-unchecked"/>)
      }
      <ul className={`list-${trail}-${level}`}>
        {comp_perks.map((perk, index) => {
          return (
            <p key={`${trail}-${level}-list-${index}`}> {perk} </p>
          )
        })}
      </ul>
      { isMobile && (selected ?
        <div className='packet-box-radio-checked-mobile' onChange={() => removeOptionChecked(trail)}>Selected</div> :
        <div className='packet-box-radio-unchecked-mobile' onChange={() => setTrail(level, trail)}>Select</div>)
      }
    </label>
  )
}

export default PackageComponent
