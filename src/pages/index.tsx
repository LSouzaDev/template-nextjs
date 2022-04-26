import React from 'react';
import Head from 'next/head';

import { Container } from '../styles/pages/Home';
import { NextComponentType } from 'next';

export function getServerSideProps(): any {
    return {
        props: {}
    };
}

const Home: NextComponentType = () => {
    return (
        <Container>
            <Head>
                <title>Homepage</title>
            </Head>
            <h1>Home Page</h1>
        </Container>
    );
};

export default Home;
