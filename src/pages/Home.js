import {Button} from "react-bootstrap"

import { Fragment } from 'react';
import Grid from "../components/Layout/Grid";
import Header from "../components/Layout/Header";
import Section from "../components/Layout/Section";
import Products from "../components/Layout/Products";

const Home = () => {
  return (
    <Fragment>
        <div>
        <h1>e-commerce</h1>
        <Button variant="primary">Primary</Button>
        </div>
    
      <Header/>
      <Grid/>
      <Section/>
      <Products/>
    </Fragment>
  )
}

export default Home;