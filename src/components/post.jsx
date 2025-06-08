import {Card, Button, Typography, CardContent} from '@mui/material';
export default function Post() {
    return(
        <>
            <Card
  sx={{
    width: '30vw',        // wider than before (from 50vw to 70vw)
    height: '95vh',       // taller than before (from 60vh to 75vh)
    backgroundColor: '#000',
    color: 'white',
    p: 2,
    borderRadius: 3,      // a bit more rounding
    boxShadow: 6,         // nice soft shadow
    border: '3px dotted darkgray'
  }}
>
  <CardContent>
    <Typography variant="h3" gutterBottom>
      This is a post title
    </Typography>
    <Typography variant="body1">
      This is post's content...... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex dolor placeat aut ipsa nemo delectus id. Corporis explicabo, eaque necessitatibus a assumenda dolore saepe iure odio hic rerum ea soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquam tenetur enim dolor quod sint soluta sed blanditiis laboriosam accusantium pariatur reiciendis explicabo ad minus quia iure, impedit alias nihil!  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat magni sunt aliquid velit odit voluptate molestias at, deserunt harum dolores illum, perspiciatis quibusdam! Minus, laboriosam? Voluptas excepturi vel consequuntur expedita!
    </Typography>
    <Button sx={{marginTop:4, p:1, backgroundColor:'purple','&:hover': {
      backgroundColor: 'darkviolet', // 👈 new color on hover
    },}} variant="contained">Read More!</Button>
  </CardContent>
</Card>
        </>
    );
}

