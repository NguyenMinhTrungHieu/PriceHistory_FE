import { Box, Typography } from '@mui/material'

function Header() {
  return (
    <Box sx={{
      backgroundColor: 'primary.light',
      height: (theme) => theme.priceHistory.headerHeight,
      display: 'flex',
      alignItems: 'center'
    }}>
      <Typography variant="h6">Header</Typography>
    </Box>
  )
}

export default Header
