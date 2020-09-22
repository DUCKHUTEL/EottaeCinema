import React from 'react';
import styles from './MainFooterComponent.module.scss';

export default function MainFooterComponent() {
  return (
    <footer>
      <section className={styles['footer']}>
        <address>
          <div className={styles['layout']}>
            <div className={styles['project-info']}>
              <h3 className="a11yHidden">오떼 시네마</h3>
              <img src="\images\common\logo_black.png" alt="오떼 시네마 로고" />
              <p>EOTTE CINEMA</p>
              <p> 2020.08.24 ~ 2020.09.23</p>

              <a href="https://github.com/DUCKHUTEL/EottaeCinema">
                <img
                  src="\images\footer-icon\iconfinder_71-github_4202098.png"
                  alt="깃허브 아이콘"
                  width="30px"
                  height="40px"
                />
                https://github.com/DUCKHUTEL/EottaeCinema
              </a>
            </div>
            <div className={styles['team-info']}>
              <div>
                <img
                  src="\images\footer-icon\iconfinder_batman_hero_avatar_comics_4043232.png"
                  alt="icon"
                />
                <p>
                  <div>조장 : 백승일</div>
                  <p>bigcoms6290@gmail.com</p>
                  <p className={styles['say']}>
                    say,
                    <br /> 살려주세요...
                  </p>
                </p>
              </div>
              <div>
                <img
                  src="\images\footer-icon\iconfinder_sloth_lazybones_sluggard_avatar_4043272.png"
                  alt="icon"
                />
                <p>
                  <div>팀원 : 최예린</div>
                  <p>bigcoms6290@gmail.com</p>
                  <p className={styles['say']}>
                    say, <br />
                    숙면... 숙면이 필요하다...
                  </p>
                </p>
              </div>
              <div>
                <img
                  src="\images\footer-icon\iconfinder_anime_spirited_away_no_face_nobody_4043233.png"
                  alt="icon"
                />
                <p>
                  <div>팀원 : 류동우 </div>
                  <p>detrox2020@gmail.com</p>
                </p>
              </div>
            </div>
          </div>
        </address>
        {/* <ul>
          <li>
            <img src="images\common\footer_award_NCSI5.png" alt="NCSI5" />
          </li>
          <li>
            <img src="images\common\footer_award_kssqi.png" alt="kssqi" />
          </li>
          <li>
            <img src="images\common\footer_award_kcsi.png" alt="kcsi" />
          </li>
          <li>
            <img
              src="images\common\footer_award_greenstar.png"
              alt="greenstar"
            />
          </li>
          <li>
            <img
              src="images\common\footer_award_familyship.png"
              alt="familyship"
            />
          </li>
          <li>
            <img
              src="images\common\footer_award_brandstar.png"
              alt="brandstar"
            />
          </li>
          <li>
            <img
              src="images\common\footer_award_brandcinema.png"
              alt="brandcinema"
            />
          </li>
        </ul> */}
      </section>
    </footer>
  );
}
