import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Alertcontainer from "./alertcontainer";

const styles = theme => ({
  root: {}
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Alertcontainer>
        <Typography variant="headline" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
      </Alertcontainer>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
