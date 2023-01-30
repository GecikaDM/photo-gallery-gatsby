// Import reat this let us use JSX in a js file
import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './index.module.css';

//define my first component

const HomePage = () => {
  return (
    <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby.</p>
        <StaticImage className={styles.bkgImg}
          alt="horse shoe bend"
          src="../images/horseShoeBend.jpg"
        />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// export your component so it can be use in other parts of your app
export default HomePage;