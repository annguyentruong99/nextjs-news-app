import React from 'react';
import styles from '../styles/EOM.module.scss';
import Toolbar from '../components/toolbar';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

const EOM = ({
    employee,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <div className='page-container'>
            <Toolbar />
            <div className={styles.main}>
                <h1>Employee of the month</h1>

                <div className={styles.employeeOfTheMonth}>
                    <h3>{employee.name}</h3>
                    <h6>{employee.position}</h6>
                    <img src={employee.image} />
                    <p>{employee.description}</p>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (pageContent) => {
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth'
    );

    const employee = await apiResponse.json();

    return {
        props: {
            employee: employee,
        },
    };
};

export default EOM;
