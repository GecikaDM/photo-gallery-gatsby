// Import reat this let us use JSX in a js file
import * as React from 'react';
import Layout from '../components/layout';

//define my first component

const HomePage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby.</p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// export your component so it can be use in other parts of your app
export default HomePage;