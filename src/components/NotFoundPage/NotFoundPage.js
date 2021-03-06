import React from 'react'
import './notfoundpage.css';
import {
  makeStyles,
  Modal,
  Backdrop,
  Fade,
  Typography,
  Grid,
  Divider,
  Paper,
} from '@material-ui/core';
const useStyles = makeStyles(() => ({
	paper:{
		backgroundColor: 'white',
		width: '100vw',
		height: '100vh',
	},
	top:{
	}
}));

const NotFoundPage = () => {
	const classes = useStyles();
    return (
		<Grid container justify='center' spacing={2} alignItems='center' direction="column">
			<Grid item xs className={classes.top}>
				<Typography variant='h1'>
					Nahi mila		
				</Typography>
			</Grid>
			<Grid item xs>
				<Paper className={classes.paper} elevation={0}/>
			</Grid>
			</Grid>

//         <div>
//             <section class="page_404">
// 	<div class="container">
// 		<div class="row">	
// 		<div class="col-sm-12 ">
// 		<div class="col-sm-10 col-sm-offset-1  text-center">
// 		<div class="four_zero_four_bg">
// 			<h1 class="text-center ">404</h1>
		
		
// 		</div>
		
// 		<div class="contant_box_404">
// 		<h3 class="h2">
// 		Look like you're lost
// 		</h3>
		
// 		<p>the page you are looking for not avaible!</p>
		
// 		<a href="/home" class="link_404">Go to Home</a>
// 	</div>
// 		</div>
// 		</div>
// 		</div>
// 	</div>
// </section>
//         </div>
    )
}
export default NotFoundPage;