import React from 'react';
import { primaryName } from '@/constant';
import Header from './Header';
import Content from './Content';
import styles from './index.less';

const prefixCls = `${primaryName}-layout`;

const BasicLayout: React.FC = props => {
  return (
    <div className={styles[prefixCls]}>
      <Header
        prefixCls={prefixCls}
      />
      <Content
        prefixCls={prefixCls}
      >
        {props.children}
      </Content>
    </div>
  );
};

export default BasicLayout;
