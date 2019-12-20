import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Alert.module.scss";

export const Alert = ({ isVisible, children }) => {
  const alertClassName = classNames(styles.alert, {
    [styles["alert--isVisible"]]: isVisible
  });

  return (
    <aside className={alertClassName}>
      {isVisible ? (
        <div className={styles.alert__container}>{children}</div>
      ) : null}
    </aside>
  );
};

Alert.propTypes = {
  isVisible: PropTypes.bool.isRequired
};

Alert.defaultProps = {
  isVisible: false
};
