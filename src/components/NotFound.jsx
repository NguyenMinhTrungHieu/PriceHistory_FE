import { Container, Typography, Box } from '@mui/material'

const NotFound = () => {
  return (
    <Container>
      <Box sx={{
        height: (theme) => `calc(100vh - ${theme.priceHistory.headerHeight} - ${theme.priceHistory.footerHeight})`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2
      }}>
        <Box >
          <Typography variant="h4" gutterBottom>
                404 - Trang không tìm thấy
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default NotFound
