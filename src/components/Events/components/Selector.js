import React from 'react';
import {
  makeStyles,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@material-ui/core';

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
  console.log(list, searchItem);
  return (
    <div>
      <FormControl variant='filled' className={classes.selector}>
        <InputLabel htmlFor='filled-org-native-simple'>
          {placeholder}
        </InputLabel>
        <Select
          // native
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
          inputProps={{
            name: placeholder,
            id: 'filled-org-native-simple',
          }}
        >
          {list.map((item, index) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
          {/* <MenuItem value='ACM'>ACM</MenuItem>
          <MenuItem value='ACM'>IEEE</MenuItem>
          <MenuItem value='ACM'>TMC</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
}
