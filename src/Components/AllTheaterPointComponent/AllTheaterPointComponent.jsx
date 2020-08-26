// @flow
import React from 'react';
import styles from "./AlltheaterPointComponent.module.scss"

export function AllTheaterPointComponent({allTheater,resTheater,selectPoint}) {
  return (
    <li className={styles.all}>
			<button></button>
			<ul className={styles.pointList}>
				<li>
					<a href="#">my 영화관 <span>0</span></a>
					<div>
						{}
						<p>my 영화관을 등록 후 <br/>이용해주세요</p>
					</div>
				</li>
				{allTheater.map(allT=>{
        	let location = Object.keys(allT)[0];
         	return (
					 <li>
          		<a>{location}
            		<span>
              		{resTheater.length === 0? allT[location].length : resTheater.filter(resT => (allT[location].includes(resT))).length}
            		</span>
          		</a>
          		<ul>
            		{allT[location].map(point => (
			      		<li>
              		<button>{point}</button>
								</li>))}
							</ul>
						</li>)
    			})}
			</ul>
		</li>
  );
};