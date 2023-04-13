import React from 'react'
import { Card, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'

const Comment = ({ commentData: { Comment, createdAt, authorName } }) => {
  return (
    <Card>
      <Box sx={{ p: '1em' }}>
        <Stack spacing={2} direction="row">
          <Box sx={{ width: '100%' }}>
            <Stack
              spacing={2}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                fontWeight="bold"
                sx={{ color: 'hsl(212, 24%, 26%)' }}
              >
                {authorName}
              </Typography>
              <Typography sx={{ color: 'hsl(211, 10%, 45%)' }}>
                {createdAt.toLocaleTimeString()}
              </Typography>
            </Stack>
            <Typography sx={{ color: 'hsl(211, 10%, 45%)', p: '20px 0' }}>
              {Comment}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Card>
  )
}

export default Comment
