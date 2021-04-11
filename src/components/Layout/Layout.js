import React from 'react'

import Auxi from '../../hoc/Auxi/Auxi';
import Weathers from '../Weathers/Weathers';
const Layout =(props)=>(
    <Auxi>
        <p>Toolbar</p>
        <p>SearchBar</p>
        <div>
            <Weathers/>
        </div>
        <div>
            {props.children}
        </div>
    </Auxi>

)

export default Layout;