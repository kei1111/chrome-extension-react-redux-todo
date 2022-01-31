import React from 'react';
import styles from '../styles/modules/title.module.scss';

// function PageTitle(children?: React.ReactNode, ...rest: Array<string>) {
//   return (
//     <p className={styles.title} {...rest}>
//       {children}
//     </p>
//   );
// }

interface PageTitleProps {
  children?: React.ReactNode;
  rest?: Array<string>;
}

const PageTitle: React.FC<PageTitleProps> = ({
  children,
  rest
}) => {
  return (
    <p className={styles.title} {...rest}>
      {children}
    </p>
  );
}

export default PageTitle;
