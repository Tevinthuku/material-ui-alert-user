import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

// motion
import { Motion, spring } from "react-motion";

// crocks

import prop from "crocks/Maybe/prop";

const styles = theme => ({
  rootcontainer: {
    position: "relative"
  },
  root: {}
});

function PaperSheet(props) {
  const { classes } = props;

  // do a comparison with safeSelect
  const safeSelect = prop("select", props).option("none");

  return (
    <Motion
      defaultStyle={{ x: 0 }}
      style={{ x: spring(100, { stiffness: 97, damping: 23 }) }}
    >
      {value => {
        // call fn here to reset the safeSelect
        const val = value.x > 98 ? "" : "";
        return (
          <div className={classes.rootcontainer}>
            <div
              style={{
                width: `${value.x}%`,
                height: 3,
                background: value.x > 98 ? "transparent" : "teal",
                transition: "background 1000ms linear"
              }}
            />
            <Paper className={classes.root} elevation={0}>
              {props.children}
            </Paper>
            <div
              style={{
                width: `${value.x}%`,
                height: 3,
                background: value.x > 98 ? "transparent" : "teal",
                transition: "background 1000ms linear"
              }}
            />
          </div>
        );
      }}
    </Motion>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
