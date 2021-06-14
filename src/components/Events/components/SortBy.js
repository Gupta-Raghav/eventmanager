import React from 'react';
import { makeStyles, Select, InputLabel, FormControl } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { sortByAmount, sortByDate } from '../../../actions/filters';
const useStyles = makeStyles(() => ({
  selector: {
    margin: '8px',
    minWidth: 120,
  },
}));

export default function Selector({ Value, placeholder }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div>
      <FormControl variant='filled' className={classes.selector}>
        <InputLabel htmlFor='filled-org-native-simple'>
          {placeholder}
        </InputLabel>
        <Select
          value={Value}
          onChange={(e) => {
            // setSort
            if (e.target.value === 'Date') {
              dispatch(sortByDate());
            } else if (e.target.value === 'Amount') {
              dispatch(sortByAmount());
            }
          }}
          inputProps={{
            name: placeholder,
            id: 'filled-org-native-simple',
          }}
        >
          <MenuItem value='Date'>Date</MenuItem>
          <MenuItem value='Amount'>Amount</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
