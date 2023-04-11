import React from 'react'
import { Button, Grid, Link, Paper, Typography } from '@mui/material'
import usePostStyles from '../styles/postStyles'

const Post = ({ own, isSinglePost, article }) => {
  const classes = usePostStyles()

  return (
    <Paper
      variant="outlined"
      sx={{
        width: 'calc(100% - 0.5em)',
        boxSizing: 'border-box',
        margin: '.5em',
        padding: '.75em'
      }}
    >
      {isSinglePost ? (
        <Typography variant="h4" component="h3">
          {article.title}
        </Typography>
      ) : (
        <Link
          href={'/post/' + article._id}
          underline="hover"
          variant="h4"
          color="black"
        >
          {article.title}
        </Link>
      )}

      <Typography
        variant="body1"
        className={isSinglePost ? '' : classes.description}
      >
        {article.text}
      </Typography>
      {article.imgUrl && (
        <img
          src={`http://localhost:5000/${article.imgUrl}`}
          alt="post image"
          className="article-img"
        />
      )}

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        my={'.25em'}
        alignItems={'center'}
      >
        <Grid item xs={6}>
          <Typography variant="h6">{article.fullName}</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'flex-end'}>
          <Typography variant="body1">
            {new Date(article.createdAt).toLocaleDateString()}
          </Typography>
        </Grid>
      </Grid>
      {!own ? (
        ''
      ) : (
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          my={'.5em'}
          alignItems={'center'}
        >
          <Grid item xs={6}>
            <Link
              href={'/edit/' + article._id}
              className={classes['link-info']}
              sx={{ color: 'white' }}
              underline="none"
            >
              Edit Article
            </Link>
          </Grid>
          <Grid item xs={6} display={'flex'} justifyContent={'flex-end'}>
            <Button
              variant="contained"
              color="error"
              sx={{ padding: { xs: '6px 6px', sm: '6px 16px' } }}
            >
              Delete Article
            </Button>
          </Grid>
        </Grid>
      )}
    </Paper>
  )
}

export default Post