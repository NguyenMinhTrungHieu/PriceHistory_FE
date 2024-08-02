import { Box, Typography } from '@mui/material'
import ProductSearch from '~/components/Product/ProductSearch'

function Content() {
  return (
    <Box sx={{
      height: (theme) => `calc(100vh - ${theme.priceHistory.headerHeight} - ${theme.priceHistory.footerHeight})`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2
    }}>
      <Box>
        <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
          Price History
        </Typography>
      </Box>
      <Box >
        <ProductSearch/>
      </Box>
    </Box>
  )
}

export default Content
