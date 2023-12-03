import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';

export const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
    weight,
    onClick,
  } = prop;

  const classes = classNames(
    className,
    style[color],
    { [style.center]: center },
    { [style[`fs${size}`]]: size },
    { [style[`fst${tsize}`]]: tsize },
    { [style[`fsd${dsize}`]]: dsize },
    { [style[`${weight}`]]: weight },
  );

  if (onClick) {
    return (
      <As className={classes} href={href} onClick={onClick}>
        {children}
      </As>
    );
  } else {
    return (
      <As className={classes} href={href}>
        {children}
      </As>
    );
  }
};

Text.PropTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  href: PropTypes.string,
  center: PropTypes.bool,
  onClick: PropTypes.func,
};
