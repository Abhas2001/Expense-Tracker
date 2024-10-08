import React from 'react'

const piechart = () => {
  return (
    <svg width="200" height="200">
  <g transform="rotate(-90 100 100)">
    <circle r="70" cx="100" cy="100" fill="transparent" stroke="lightgrey" stroke-width="2rem" stroke-dasharray="439.8" stroke-dashoffset="0"></circle>
    <circle r="70" cx="100" cy="100" fill="transparent" stroke="blue" stroke-width="2rem" stroke-dasharray="439.8" stroke-dashoffset="420"> 
    </circle>
  </g>
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle">85%</text>
</svg>
  )
}

export default piechart
