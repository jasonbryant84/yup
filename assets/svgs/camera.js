import React from 'react'
import styled from 'styled-components'

const Camera = () => {
  return (
    <SVG id="camera-svg" x="0px" y="0px" viewBox="0 0 420.8 420.8">
		<g>
			<g>
				<g>
					<path d="M406.8,96.4c-8.4-8.8-20-14-33.2-14h-66.4v-0.8c0-10-4-19.6-10.8-26c-6.8-6.8-16-10.8-26-10.8h-120
						c-10.4,0-19.6,4-26.4,10.8c-6.8,6.8-10.8,16-10.8,26v0.8h-66c-13.2,0-24.8,5.2-33.2,14c-8.4,8.4-14,20.4-14,33.2v199.2
						C0,342,5.2,353.6,14,362c8.4,8.4,20.4,14,33.2,14h326.4c13.2,0,24.8-5.2,33.2-14c8.4-8.4,14-20.4,14-33.2V129.6
						C420.8,116.4,415.6,104.8,406.8,96.4z M400,328.8h-0.4c0,7.2-2.8,13.6-7.6,18.4s-11.2,7.6-18.4,7.6H47.2
						c-7.2,0-13.6-2.8-18.4-7.6c-4.8-4.8-7.6-11.2-7.6-18.4V129.6c0-7.2,2.8-13.6,7.6-18.4s11.2-7.6,18.4-7.6h77.2
						c6,0,10.8-4.8,10.8-10.8V81.2c0-4.4,1.6-8.4,4.4-11.2s6.8-4.4,11.2-4.4h119.6c4.4,0,8.4,1.6,11.2,4.4c2.8,2.8,4.4,6.8,4.4,11.2
						v11.6c0,6,4.8,10.8,10.8,10.8H374c7.2,0,13.6,2.8,18.4,7.6s7.6,11.2,7.6,18.4V328.8z"/>
					<path d="M210.4,130.8c-27.2,0-52,11.2-69.6,28.8c-18,18-28.8,42.4-28.8,69.6s11.2,52,28.8,69.6c18,18,42.4,28.8,69.6,28.8
						s52-11.2,69.6-28.8c18-18,28.8-42.4,28.8-69.6s-11.2-52-28.8-69.6C262.4,142,237.6,130.8,210.4,130.8z M264.8,284
						c-14,13.6-33.2,22.4-54.4,22.4S170,297.6,156,284c-14-14-22.4-33.2-22.4-54.4c0-21.2,8.8-40.4,22.4-54.4
						c14-14,33.2-22.4,54.4-22.4s40.4,8.8,54.4,22.4c14,14,22.4,33.2,22.4,54.4C287.6,250.8,278.8,270,264.8,284z"/>
					<circle cx="352.8" cy="150" r="19.6"/>
				</g>
			</g>
		</g>
	</SVG>
  )
}

export default Camera

const SVG = styled.svg`   
	max-width: 25px;

	path, circle {
		fill: #2e69e1;
	}

    &:hover {     
        cursor: pointer;
        fill: black;
    }
`
