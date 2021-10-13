import React from 'react'
import './App.css';
import {TextField, Button, Divider} from '@material-ui/core';
import {Link} from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PersonIcon from '@material-ui/icons/Person';

const Login=()=>{
    return(
        <div>
            <div className="icon">
            <div className="icon_class">
                <PersonIcon fontSize="medium"/>
            <div className="text">Login
            </div>                          
                     
            </div>
                <div className="row m-2">
                <TextField id="email" className="p-2" type="text" variant="outlined" label="Enter Email" fullWidth/>
                <TextField id="Password" clasName="p2" type="text" variant="outlined" label="Enter Password" fullWidth/>
                <FormControlLabel
                    control={
                        <Checkbox
                        icon={<CheckBoxOutlineBlankIcon fontSize="small"/>}
                        checkedIcon={<CheckBoxIcon fontSize="small"/>}
                        name="checkedI"
                        />
                    }
                        label="Remember me"
            />

                <Button variant="contained" color="primary" fullwidth>Log in</Button>
                    
            </div>
                <Divider variant="middle"/>
                <p className="text-center">
                    <Link to="\Signup">
                        <h5>
                            Create Account
                        </h5>
                    </Link>
                </p>

            </div>
        </div>           
    
    )
}

export default Login