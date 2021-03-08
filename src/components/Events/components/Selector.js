import React from 'react';
import { makeStyles, Select, InputLabel, FormControl } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  selector: {
    margin: '8px',
    minWidth: 120,
  },
}));

export default function Selector({ searchItem, setSearchItem, list }) {
  const classes = useStyles();
  return (
    <div>
      <FormControl variant='filled' className={classes.selector}>
        <InputLabel htmlFor='filled-org-native-simple'>Club</InputLabel>
        <Select
          native
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          inputProps={{
            name: 'club',
            id: 'filled-org-native-simple',
          }}
        >
          <option aria-label='None' value='' />
          {list.map((value, index) => {
            return <option value={index}>{value}</option>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}
