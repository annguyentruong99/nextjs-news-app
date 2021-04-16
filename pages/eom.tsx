import React from 'react';
import styles from '../styles/EOM.module.scss';
import NavBar from '../components/NavBar';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

const EOM: React.FC = ({
    employee,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <div className='page-container'>
            <NavBar>
                <div className={styles.main}>
                    <h1>Employee of the month</h1>

                    <div className={styles.employeeOfTheMonth}>
                        <h3>{employee.name}</h3>
                        <h6>{employee.position}</h6>
                        <img src={employee.image} />
                        <p>{employee.description}</p>
                    </div>
                </div>
            </NavBar>
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
