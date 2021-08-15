import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import memories from './images/memories.png';

const App = () => {
    return (
        <Container maxwidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Hello, I am your Memories</Typography>
                <img src={memories} alt="Memories" height="60"/>
            </AppBar>
        </Container>
    );
}

export default App;