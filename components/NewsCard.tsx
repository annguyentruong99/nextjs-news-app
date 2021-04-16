import React from 'react';

import { Grid, Card, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        card: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 500,
        },
        image: {
            width: 128,
            height: 128,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
    })
);

interface NewsCardProps {
    image: string;
    title: string;
    author: string;
    description: string;
}

const NewsCard: React.FC<NewsCardProps> = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <Grid container spacing={2}>
                    <Grid item>
                        {props.image ? (
                            <img
                                className={classes.img}
                                src={props.image}
                                alt='article image'
                            />
                        ) : null}
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction='column' spacing={2}>
                            <Grid item xs>
                                <Typography variant='h5'>
                                    {props.title}
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    gutterBottom
                                >
                                    {props.author}
                                </Typography>
                                <Typography variant='caption'>
                                    {props.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
};

export default NewsCard;
