import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import {TextField, Button, Divider} from '@material-ui/core';

const Signup=()=>{
    return(
        <div>
            <div className="icon">
            <div className="icon_class">
            <div className="text">Sign Up 
            </div>

            <div className="row m-2">
            <div className="col 6 p-2">
                <TextField id="firstname" type="text" variant="outlined" label="Enter First Name" fullWidth/>
            </div>
                <div className="col 6 p-2">
                <TextField id="firstname" type="text" variant="outlined" label="Enter Last Name" fullWidth/>
            </div>
                            
                        
            </div>
                <div className="col 6 m-2 p-2">
                <TextField id="email" className="p-2" type="text" variant="outlined" label="Enter Email" fullWidth/>
                <TextField id="Password" className="p-2" type="text" variant="outlined" label="Enter Password" fullWidth/>
                <Button variant="contained" color="primary">Sign Up</Button>
                </div>
                <Divider variant="middle"/>
                <p className="text-center">
                    <Link to="\Login" className="text-black-50">
                        <h5>
                            Already have an Account?
                        </h5>
                    </Link>
                </p>

            </div>
        </div>           
    </div>
    )
}

export default Signup