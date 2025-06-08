import Post from './post';
import Box from '@mui/material/Box';

export default function Posts() {
  return (
<>
    <Box sx={{width: '100%', height:'50%', backgroundColor:'#000', p:3, borderTop:'3px solid grey'}}>
        <Post />
    </Box>
</>
  );
}
