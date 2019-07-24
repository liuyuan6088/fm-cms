import * as React from 'react';
import { Breadcrumb } from 'antd';
import * as styles from './index.less';

interface IContentProps {
  prefixCls?: string
}

const Content: React.FC<IContentProps> = props => {

  const {
    prefixCls,
    children
  } = props;

  return (
    <div className={styles[`${prefixCls}-container`]}>
      <div className={styles[`${prefixCls}-breadcrumb`]}>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className={styles[`${prefixCls}-box`]}>
        <div className={styles[`${prefixCls}-sider`]}>
          {'adada'}
        </div>
        <div className={styles[`${prefixCls}-content`]}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Content;
