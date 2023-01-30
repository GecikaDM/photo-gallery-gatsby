import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
        <p>My name is Gecika, I am a front end developper and as a passtime, I like taking photographies, from my garden to Alaska, I try to catch scenes which make our world beautiful</p>
        </Layout>
    )
}

export const Head = () => <title>About Me</title>

export default AboutPage;