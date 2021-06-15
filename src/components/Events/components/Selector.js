import React from 'react';
import { makeStyles, Select, InputLabel, FormControl } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { setType } from '../../../actions/filters';
const useStyles = makeStyles(() => ({
  selector: {
    margin: '8px',
    minWidth: 120,
  },
}));

export default function Selector({
  Value,
  list,
  searchItem,
  setSearchItem,
  placeholder,
}) {
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
            setSearchItem(searchItem);
            dispatch(setType(e.target.value));
          }}
          inputProps={{
            name: placeholder,
            id: 'filled-org-native-simple',
          }}
        >
          <MenuItem value='Technical'>Technical</MenuItem>
          <MenuItem value='Cultural'>Cultural</MenuItem>
          <MenuItem value='Department'>Department</MenuItem>
          <MenuItem value='Curricular'>Curricular</MenuItem>
          <MenuItem value='Social'>Social</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
