import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia, Checkbox, Grid, checkboxClasses } from '@mui/material';
import { useState } from 'react';
import InputWithIcon, { Form1, Form2 } from './Form';
import { useNavigate } from 'react-router';




export default function BasicCard() {

  const [Checkbox1, setchecbox1] = useState(false);
  const [Checkbox2, setchecbox2] = useState(false);
  const navigate = useNavigate();

  const formcontrol = (e) => {

    if(Checkbox1 === true){
      navigate("/Form1")
    }
    if(Checkbox2 === true){
      navigate("/Form2")
    }

  }



  return (
    <>
      <Grid container justifyContent={"center"} spacing={2} xs={12}>
        <Grid item xs={2}></Grid>
        <Grid item xs={3} spacing={2}>
          <Card
            style={{ margin: "1rem" }}>


<CardActionArea
onClick={(e)=>{
  console.log(e)
}}
>
            <CardContent

            >
              <Checkbox
                value={Checkbox1}
                onChange={(e) => {
                  setchecbox1(e.target.checked)
                }}
              />
              <CardMedia
                component="img"
                height="194"
                image="https://mui.com/static/images/cards/paella.jpg"
                alt="Paella dish"
              />
            </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small">Text Ad</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3} spacing={2}>
          <Card

            style={{ margin: "1rem" }}>
            <CardContent


            >
              <Checkbox

                value={Checkbox2}
                onChange={(e) => {
                  setchecbox2(e.target.checked)
                }}

              />

              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus quia corrupti alias distinctio nostrum. Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Media Ad</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2}></Grid>

      </Grid>
      <Grid item xs={12} style={{ marginLeft: "70rem" }} justifyItems={'right'}>
        {/* <Form1/>
          <Form2/> */}
        <Button onClick={()=>{
          formcontrol()
        }}>Next</Button>
      </Grid>
    </>
  );
}
