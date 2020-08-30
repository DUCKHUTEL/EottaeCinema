import React from "react";
import styles from "./MainWallpaperComponent.module.scss";

export default function MainWallpaperComponent() {
    return (
        <section className={styles["wallpaper"]}>
            <div className={styles["img"]}>
                <button className={styles["play"]}>영화 재생버튼</button>
            </div>
            <div className={styles["control"]}>
                <div>
                    <button>영화 조종 버튼</button>
                </div>
            </div>
        </section>
    );
}
