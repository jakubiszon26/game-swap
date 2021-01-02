import React from 'react';
import { Button, Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';



export default function Header(props){
    return(
        <>
            <Menu inverted>
                <Menu.Item>
                    <h1>GAME SWAP</h1>
                </Menu.Item>
                <Menu.Item position="right">
                    <Link to='/create-offer'><Button component={Link} to='/create-offer' positive content="Dodaj ofertę"/></Link>
                    <Button  color="blue" content="Zaloguj się" style={{marginLeft: "5px"}}/>
                </Menu.Item>
            </Menu>
        </>
    )
}