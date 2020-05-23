import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
        {props.isAuthenticated
            ? <NavigationItem link="/logout">Sign Out</NavigationItem>
            : <NavigationItem link="/auth">Sign In</NavigationItem>
        }
    </ul>
);

export default navigationItems;