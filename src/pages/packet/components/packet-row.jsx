import PacketStruct from '../../../data/packet-structure.json';
import PackageComponent from './package-component';
import React from 'react';

const PackageRow = ({ trail, build, engage, recruit, removeOptionChecked, setTrail, isMobile }) => {
  const TRAILS_LIST = ["build", "engage", "recruit"];

  const row_trail = trail !== undefined ? trail : 'build';
  const selectedLevel = trail === "build" ? build : trail === "engage" ? engage : recruit;
  const trailPerks = PacketStruct["trails"][trail] !== undefined ? PacketStruct["trails"][trail] : [];


  const row = []
  trailPerks.forEach((level, index) => {
    row.push(<PackageComponent className={`row-${trail}-${level}`} trail={trail} level={index + 1} key={`${trail}-${level}`}
                               isMobile={isMobile} perks={level} callback={(level, trailType) => setTrail(level, trailType)}
                               selected={selectedLevel === index + 1}/>)
  })

  if (!isMobile) {
    return (
      <div className={`${trail}-div-pack`}>
        <div className={`packet-headline ${trail}-headline`}>
          <div className={`${trail}-circle`}>{TRAILS_LIST.findIndex((elem) => elem===trail) + 1}</div>
          {`Select your ${row_trail.charAt(0).toUpperCase() + row_trail.slice(1)} Package`}
          <div className={`${trail}-opt-out-button`} onClick={() => removeOptionChecked(trail)}>
            Clear selection
          </div>
        </div>
        <div className={`${trail}-row`}> { row } </div>
      </div>
    )
  } else {
    return (
      <div className={`${trail}-div-pack`}>
        <div className={`packet-headline ${trail}-headline`}>
          {`${row_trail.charAt(0).toUpperCase() + row_trail.slice(1)} Package`}
          <div className={`${trail}-opt-out-button`} onClick={() => removeOptionChecked(trail)}>
            Clear selection
          </div>
        </div>
        <div className={`${trail}-row`}> { row } </div>
      </div>
    )
  }
}

export default PackageRow
