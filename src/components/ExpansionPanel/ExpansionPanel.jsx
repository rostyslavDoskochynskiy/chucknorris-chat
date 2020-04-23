import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './style';

/**
 * Description:
 *
 * Component for Expansion Panel
 *
 */

export const ExpansionPanelBase = ({
  children,
  panelSummary,
  closeSymbol,
  expanded,
  onChange,
}) => {
  const classes = useStyles();
  return (
    <ExpansionPanel
      className={classes.panel}
      expanded={expanded}
      onChange={onChange}
    >
      <ExpansionPanelSummary
        className={classes.panelSummary}
        expandIcon={<ExpandMoreIcon className={classes.button} />}
      >
        {panelSummary}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.panelDetails}>
        <Typography component="span">{children}</Typography>
      </ExpansionPanelDetails>
      {closeSymbol}
    </ExpansionPanel>
  );
};
