// @flow
import React, { useMemo, useCallback, useState } from 'react';
import styles from "./AlltheaterPointComponent.module.scss"

export function AllTheaterPointComponent({allTheater,resTheater,selectPoint,point}) {
	// function localTabChange(){

	// }
	const [active,setActive] = useState(point!==""?point:"서울");

	const localTabChange = useCallback((e)=>{
		if(!e.target.matches("a"))return;
		setActive(e.target.parentNode.id);
	},[])

  return (
    // <div className={styles.all}>
			<ul className={styles.pointList} onClick={localTabChange}>
				<li id="my영화관" className={active === "my영화관" ? ([styles.active, styles.theaterTitle].join(' ')) : styles.theaterTitle}>
					<a href="#">MY 영화관 (0)</a>
					<ul>
						<li>
							<p>my 영화관을 등록 후 <br/>이용해주세요</p>
						</li>
					</ul>
				</li>
				{allTheater.map(allT=>{
        	let location = Object.keys(allT)[0];
         	return (
					 <li key={location} id={location} className={
						 	// point!==""?location===point?([styles.active, styles.theaterTitle].join(' ')):styles.theaterTitle:location==="서울"?([styles.active, styles.theaterTitle].join(' ')):styles.theaterTitle
						 	active === location ? ([styles.active, styles.theaterTitle].join(' ')) : styles.theaterTitle
						 }>
          		<a href="#">{location} (
              		{resTheater.length === 0? allT[location].length : resTheater.filter(resT => (allT[location].includes(resT))).length}
									)
          		</a>
          		<ul>
            		{allT[location].map(point => (
			      		<li key={point}>
              		<a href="#">{point}</a>
								</li>))}
							</ul>
						</li>)
    			})}
			</ul>
		// </div>
  );
};