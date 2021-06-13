import React from 'react';

import {
  makeStyles,
  GridList,
  IconButton,
  GridListTile,
  Typography,
  Grid,
  Divider,
} from '@material-ui/core';
export default function Carousel() {
  return (
    <div>
      <Grid container direction='row' justify='space-between'>
        <Grid item xs>
          one
        </Grid>
        <Grid item xs>
          one
        </Grid>
        <Grid item xs>
          one
        </Grid>
      </Grid>
    </div>
  );
}
