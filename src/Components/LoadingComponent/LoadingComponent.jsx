// @flow
import React from 'react';
import { Button } from 'antd';
import styles from './LoadingComponent.module.scss'
export function LoadingComponent({loading}) {
  return (
    <div className={loading?([styles.loading, styles.on].join(' ')): ([styles.loading, styles.off].join(' '))}>
      <Button type="primary" loading size="larger">로딩중</Button>
    </div>
  );
};