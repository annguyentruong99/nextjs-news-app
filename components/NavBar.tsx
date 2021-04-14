import React from 'react';
import { useRouter, NextRouter } from 'next/router';

import { Grid } from '@material-ui/core';

const NavBar: React.FC = () => {
    const router: NextRouter = useRouter();

    return (
        <Grid container direction='row' justify='center' alignItems='center'>
            <Grid item></Grid>
        </Grid>
    );
};

export default NavBar;
