import React from 'react';

import { Grid } from '@material-ui/core';
export default function Carousel() {
  return (
    <div>
      <Grid container direction='row' justify='space-evenly'>
        <Grid item xs style={{ paddingTop: '40px' }}>
          <a
            href='https://forms.gle/bz14iHDQBRZfnzNg7'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src='https://i.ibb.co/vHzpcxZ/carousel2.jpg'
              alt='poster'
              style={{
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                height: '28vh',
                boxShadow: '0px 0px 30px 10px #888888',
              }}
            />
          </a>
        </Grid>
        <Grid item xs>
          <a
            href='https://forms.gle/bz14iHDQBRZfnzNg7'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src='https://i.ibb.co/C04jwvb/carousel1.jpg'
              // src='https://i.ibb.co/n8DXL5W/OCelicit6.png'
              alt='poster'
              style={{
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                height: '38vh',
                boxShadow: '0px 0px 40px 12px #888888',
              }}
            />
          </a>
        </Grid>
        <Grid item xs style={{ paddingTop: '40px' }}>
          <a
            href='https://forms.gle/bz14iHDQBRZfnzNg7'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src='https://i.ibb.co/n8DXL5W/OCelicit6.png'
              // src='https://i.ibb.co/C04jwvb/carousel1.jpg'
              alt='poster'
              style={{
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                height: '28vh',
                boxShadow: '0px 0px 30px 10px #888888',
              }}
            />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}
