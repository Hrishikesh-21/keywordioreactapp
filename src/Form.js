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

        <Card sx={{ minWidth: 100 }}>
            <CardContent>
                <Grid container justifyContent={'center'}>


                    <Grid container justifyContent={'center'}>
                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                            <TextField id="standard-basic" label="Heading 1" variant="standard" />
                            <TextField id="standard-basic" label="Heading 2" variant="standard" />
                            <TextField id="standard-basic" label="Description" variant="standard" />
                        </Box>
                    </Grid>
                    <Grid container justifyContent={'center'}>
                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                            <TextField id="standard-basic" label="Buisneess Name" variant="standard" />
                            <TextField id="standard-basic" label="Button Label" variant="standard" />
                            <TextField id="standard-basic" label="Website URL" variant="standard" />
                        </Box>
                    </Grid>

                    <Button

                        onClick={() => {
                            navigate("/CreateAds")
                        }}

                    >Back</Button>
                    <Button
                        onClick={handleClickOpen}
                    >Submit</Button>



                    <Dialog
                        open={open}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Submitted"}
                        </DialogTitle>
                    </Dialog>

                </Grid>
            </CardContent>
        </Card>
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

        <Card sx={{ minWidth: 100 }}>
            <CardContent>
                <Grid container justifyContent={'center'}>


                    <Grid container justifyContent={'center'}>
                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                            <TextField id="standard-basic" label="Heading 1" variant="standard" />
                            <TextField id="standard-basic" label="Heading 2" variant="standard" />
                            <TextField id="standard-basic" label="Lanscape Marketing" variant="standard" />
                        </Box>
                    </Grid>

                    <Grid container justifyContent={'center'}>
                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                            <TextField id="standard-basic" label="Portrait Marketing" variant="standard" />
                            <TextField id="standard-basic" label="Square Marketing" variant="standard" />
                            <TextField id="standard-basic" label="Video URL" variant="standard" />
                        </Box>
                    </Grid>


                    <Grid container justifyContent={'center'}>
                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                            <TextField id="standard-basic" label="Description" variant="standard" />
                            <TextField id="standard-basic" label="Buisneess Name" variant="standard" />
                            <TextField id="standard-basic" label="Website URL" variant="standard" />

                            <Select

                                value={"Button Label"}
                                label="Button Label"
                            >
                                <MenuItem value={"Button Label"}>Button Label</MenuItem>

                            </Select>
                        </Box>
                    </Grid>
                    <Button
                        onClick={() => {
                            navigate("/CreateAds")
                        }}

                    >Back</Button>
                    <Button
                        onClick={handleClickOpen}
                    >Submit</Button>



                    <Dialog
                        open={open}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Submitted"}
                        </DialogTitle>
                    </Dialog>



                </Grid>
            </CardContent>
        </Card>
    );
}
