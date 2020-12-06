import React from 'react';
import { Grid} from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);//call back function to whole redux state //refer reducers index.js
  const classes = useStyles();

  return (
     (                //circular load if no post is shown.
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (                              //dynamic arrangement for dynamic devices
          <Grid key={post._id} item xs={12} sm={6} md={6}> 
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
