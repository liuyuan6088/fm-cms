import * as React from 'react';
import * as styles from './index.less';

interface IHeaderProps {
  prefixCls?: string
}

const Header: React.FC<IHeaderProps> = props => {

  const {
    prefixCls
  } = props;

  return (
    <div className={styles[`${prefixCls}-header`]}>
      {}
    </div>
  )
}

export default Header;
