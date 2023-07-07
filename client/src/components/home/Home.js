import React from 'react'
import Banner from '../banner/Banner.js'
import Categories from './Categories.js'
import Posts from './post/Posts.js'
import { Grid} from '@mui/material'

const Home = () => {
  return (
    <div>
    <Banner/>
    <Grid container>
    <Grid item lg={2} sm={2} xs={12}>
    <Categories/>
    </Grid>
    <Grid item lg={10} sm={10} xs={12}>
    <Posts/>
    </Grid> 
    </Grid>
    </div>
  )
}

export default Home