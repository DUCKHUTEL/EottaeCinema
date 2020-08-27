import React from 'react';
import styles from './theaterComponent.module.scss'
function TheaterComponent(props) {

	const selectPoint = ()=>{

	}
  return (
    <section>
      <h4>영화관</h4>
			<ul className={styles.theaterPoint}>
				<allTheaterPointComponent/>
				<li className={styles.special}>
					<button></button>
				</li>
			</ul>
    </section>
  );
};
export default TheaterComponent