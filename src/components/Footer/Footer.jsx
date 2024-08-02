import { Box, Typography } from '@mui/material'

function Footer() {
  return (
    <Box sx={{
      backgroundColor: 'primary.dark',
      height: (theme) => theme.priceHistory.footerHeight,
      display: 'flex',
      alignItems: 'center'
    }}>
      <Typography variant="h6">Footer</Typography>
    </Box>
  )
}

export default Footer
