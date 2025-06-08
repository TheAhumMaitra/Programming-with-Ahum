import { Grid, Paper, Box } from '@mui/material';
import Post from './post'; // Assuming this is your Post component

export default function Posts() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          minHeight: '50vh',
          backgroundColor: '#000',
          p: 3,
          borderTop: '3px solid grey'
        }}
      >
        <h2 className='underline text-center m-8 text-3xl text-white font-bold'>
          Featured
        </h2>

        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
            <Post />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Post />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Post />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Post />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Post />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Post />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
