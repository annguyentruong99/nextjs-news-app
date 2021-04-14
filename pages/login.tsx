import React, { useState } from 'react';
import { useRouter } from 'next/router';

import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
} from '@material-ui/core';

interface States {
    signedIn: Boolean;
    username: String;
    password: String;
}

const Login: React.FC = () => {
    const router = useRouter();

    const [state, setState] = useState<States>({
        signedIn: false,
        username: '',
        password: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (
            state.username === 'an.nguyentruong99' &&
            state.password === '123456'
        ) {
            await setState((prevState) => ({
                ...prevState,
                signedIn: true,
            }));
            router.push('/');
        }
    };

    return (
        <Grid container direction='column' justify='center' alignItems='center'>
            <Grid item>
                <Card>
                    <CardHeader title='Log In' />

                    <CardContent>
                        <form noValidate onSubmit={handleSubmit}>
                            <TextField
                                variant='outlined'
                                margin='normal'
                                required
                                fullWidth
                                id='username'
                                label='Username'
                                name='Username'
                                autoFocus
                                value={state.username}
                                onChange={handleChange}
                            />

                            <TextField
                                variant='outlined'
                                margin='normal'
                                required
                                fullWidth
                                name='password'
                                label='Password'
                                type='password'
                                id='password'
                                value={state.password}
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value='remember'
                                        color='primary'
                                    />
                                }
                                label='Remember me'
                            />

                            <Button
                                type='submit'
                                fullWidth
                                variant='contained'
                                color='primary'
                            >
                                Sign In
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Login;
