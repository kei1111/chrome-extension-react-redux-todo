import React from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
  variant: 'primary' || 'secondary',
};

interface ButtonProps {
  type?: string;
  variant: string;
  children?: React.ReactNode;
  rest?: Array<string>;
  onClick?: () => any;
}

// function Button(type?: string, variant = 'primary', children?: React.ReactNode, ...rest: Array<string>) {
//   return (
//     <button
//       type={type === 'submit' ? 'submit' : 'button'}
//       className={getClasses([
//         styles.button,
//         styles[`button--${buttonTypes.variant}`],
//       ])}
//       {...rest}
//     >
//       {children}
//     </button>
//   );
// }
const Button: React.FC<ButtonProps> = ({
  type,
  variant,
  children,
  rest,
  onClick,
}) => {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      className={getClasses([
        styles.button,
        styles[`button--${buttonTypes.variant}`],
      ])}
      {...rest}
    >
      {children}
    </button>
  );
}

interface SelectProps {
  id: string;
  children?: any;
  rest?: Array<string>;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SelectButton: React.FC<SelectProps> = ({
  id,
  children,
  rest,
}) => {
  return (
    <select
      id={id}
      className={getClasses([styles.button, styles.button__select])}
      {...rest}
    >
      {children}
    </select>
  );
}

// function SelectButton(id: string, children?: React.ReactNode, ...rest: Array<string>) {
//   return (
//     <select
//       id={id}
//       className={getClasses([styles.button, styles.button__select])}
//       {...rest}
//     >
//       {children}
//     </select>
//   );
// }

export { SelectButton };
export default Button;
