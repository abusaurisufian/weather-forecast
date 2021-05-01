import React from 'react';
import classes from './Toolbar.module.css';
const toolbar=(props)=>{ 

    return( 
    <ul className={classes.Toolbar}>
        <li onClick={()=>props.clicked('Dhaka')}>Dhaka</li>
        <li onClick={()=>props.clicked('Rajshahi')} >Rajshahi</li>
        <li onClick={()=>props.clicked('Sylhet')}>Sylhet</li>
        <li onClick={()=>props.clicked('Barishal')}>Barishal</li>
        <li onClick={()=>props.clicked('Khulna')}>Khulna</li>
        <li onClick={()=>props.clicked('Rangpur')}>Rangpur</li>
        <li onClick={()=>props.clicked('Chittagong')}>Chittagong</li>
        <li onClick={()=>props.clicked('Mymenshing')}>Mymenshing</li>
    </ul>
    )
    };

export default toolbar;