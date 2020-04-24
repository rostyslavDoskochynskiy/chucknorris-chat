import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  panel: {
    boxShadow: 'none',

    '&:before': {
      content: 'none',
    },
  },

  panelSummary: {
    padding: 0,
    margin: 0,
    maxHeight: '24px',
    minHeight: '24px',

    '&.Mui-expanded': {
      maxHeight: '24px',
      minHeight: '24px',
    },
  },

  panelContent: {
    padding: 0,
    margin: 0,
  },

  panelDetails: {
    padding: '8px 8px 8px 24px',
  },

  button: {
    padding: 0,
  },
}));
