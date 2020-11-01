import PacketStruct from '../../../data/packet-structure.json';
import PackageComponent from './package-component';
import React from 'react';

const PackageRow = ({ trail, build, engage, recruit, TRAILS_LIST, removeOptionChecked, setTrail, isMobile }) => {
  const row = []
  const selectedLevel = trail === "build" ? build : trail === "engage" ? engage : recruit
  PacketStruct["trails"][trail].forEach((level, index) => {
    row.push(<PackageComponent className={`row-${trail}-${level}`} trail={trail} level={index + 1} key={`${trail}-${level}`}
                               isMobile={isMobile} perks={level} callback={(level, trailType) => setTrail(level, trailType)}
                               selected={selectedLevel === index + 1}/>)
  })

  return (
    <div className={`${trail}-div-pack`}>
      <div className={`packet-headline ${trail}-headline`}>
        {!isMobile && <div className={`${trail}-circle`}>{TRAILS_LIST.findIndex((elem) => elem===trail) + 1}</div>}
        {(!isMobile ? 'Select your ' : '') + `${trail.charAt(0).toUpperCase() + trail.slice(1)} Package`}
        <div className={`${trail}-opt-out-button`} onClick={() => removeOptionChecked(trail)}>
          Clear selection
        </div>
      </div>
      <div className={`${trail}-row`}> { row } </div>
    </div>
  )
}



export default PackageRow
