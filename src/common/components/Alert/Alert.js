import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Alert.module.scss";

export const Alert = ({ isVisible, children }) => {
  const alertClassName = classNames(styles.alert, {
    [styles["alert--isVisible"]]: isVisible
  });

  return <div className={alertClassName}>{children}</div>;
};

Alert.propTypes = {
  isVisible: PropTypes.bool
};

Alert.defaultProps = {
  isVisible: false
};
