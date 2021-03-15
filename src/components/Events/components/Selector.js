import React from 'react';
import { makeStyles, Select, InputLabel, FormControl } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  selector: {
    margin: '8px',
    minWidth: 120,
  },
}));

export default function Selector({
  searchItem,
  setSearchItem,
  list,
  placeholder,
}) {
  const classes = useStyles();
  return (
    <div>
      <FormControl variant='filled' className={classes.selector}>
        <InputLabel htmlFor='filled-org-native-simple'>
          {placeholder}
        </InputLabel>
        <Select
          native
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
            console.log(e.target.name);
          }}
          inputProps={{
            name: placeholder,
            id: 'filled-org-native-simple',
          }}
        >
          <option aria-label='None' value='' />
          {list &&
            list.map((value, index) => {
              return <option value={index}>{value}</option>;
            })}
        </Select>
      </FormControl>
    </div>
  );
}
