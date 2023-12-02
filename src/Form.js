import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button, Card, CardContent, Dialog, DialogTitle, Grid, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router';

var cardStyle = {
    display: 'block',
    width: '60vw',
    transitionDuration: '0.3s',
    height: '30vw',
    margin: "2rem"
}

export function AlertDialog(props) {
    console.log(props)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open alert dialog
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Submitted"}
                </DialogTitle>
            </Dialog>
        </>
    );


}


export function Form1() {


    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const handleClickOpen = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false)
            navigate("/CreateAds")

        }, 600);


    };




    return (



        <>
            <Grid container xs={12}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Card style={cardStyle}>


                        <div style={{ margin: "1rem" }}>
                            <TextField style={{ margin: "1rem" }} id="outlined-basic" label="Heading 1" variant="outlined" />
                            <TextField style={{ margin: "1rem" }} id="outlined-basic" label="Heading 2" variant="outlined" />
                            <TextField style={{ margin: "1rem" }} id="outlined-basic" label="Description" variant="outlined" />

                            <TextField style={{ margin: "1rem" }} id="outlined-basic" label="Buisneess Name" variant="outlined" />
                            <TextField style={{ margin: "1rem" }} id="outlined-basic" label="Button Label" variant="outlined" />
                            <TextField style={{ margin: "1rem" }} id="outlined-basic" label="Website URL" variant="outlined" />


                        </div>

                        <div style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <Button

                                onClick={() => {
                                    navigate("/CreateAds")
                                }}

                            >Back</Button>
                            <Button
                                onClick={handleClickOpen}
                            >Submit</Button>
                        </div>
                    </Card>

                </Grid>

            </Grid>


            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Submitted"}
                </DialogTitle>
            </Dialog>

        </>
    );
}

export function Form2() {

    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const handleClickOpen = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false)
            navigate("/CreateAds")
        }, 600);
    };

    return (
        <>
            <Grid container xs={12}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Card style={cardStyle}>
                        <div style={{ margin: "1rem" }}>
                            <TextField style={{ margin: "1rem" }} id="outlined-basic" label="Heading 1" variant="outlined" />
                            <TextField style={{ margin: "1rem" }} id="outlined-basic" label="Heading 2" variant="outlined" />
                            <TextField style={{ margin: "1rem" }} id="outlined-basic" label="Lanscape Marketing" variant="outlined" />


                            <TextField style={{ margin: "1rem" }} id="outlined-basic" label="Portrait Marketing" variant="outlined" />
                            <TextField style={{ margin: "1rem" }} id="outlined-basic" label="Square Marketing" variant="outlined" />
                            <TextField style={{ margin: "1rem" }} id="outlined-basic" label="Video URL" variant="outlined" />





                            <TextField style={{ margin: "1rem" }} id="outlined-basic" label="Description" variant="outlined" />
                            <TextField style={{ margin: "1rem" }} id="outlined-basic" label="Buisneess Name" variant="outlined" />
                            <TextField style={{ margin: "1rem" }} id="outlined-basic" label="Website URL" variant="outlined" />

                            <Select
                                style={{ margin: "1rem" }}
                                value={"Button Label"}
                                label="Button Label"
                            >
                                <MenuItem value={"Button Label"}>Button Label</MenuItem>

                            </Select>
                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <Button
                                onClick={() => {
                                    navigate("/CreateAds")
                                }}

                            >Back</Button>
                            <Button
                                onClick={handleClickOpen}
                            >Submit</Button>
                        </div>
                    </Card>

                </Grid>

            </Grid>


            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Submitted"}
                </DialogTitle>
            </Dialog>

        </>


    )
}
