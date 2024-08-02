import { useState } from 'react'
import { TextField, Button, Container, Typography } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SearchProduct = () => {
  const [asin, setAsin] = useState('')
  // const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://pricehistory-be.onrender.com/v1/products/${asin}`)
      // setError(null);
      navigate(`/products/${asin}`, { state: { product: response.data } })
    } catch (err) {
      // setError('Sản phẩm không tìm thấy');
      navigate('/404')
    }
  }

  return (
    <Container>
      <Typography variant="h6" gutterBottom>B08R55BQW5</Typography>
      <Typography variant="h6" gutterBottom>B01GRYYJ4U</Typography>
      <Typography variant="h4" gutterBottom>Tìm kiếm sản phẩm</Typography>
      <TextField
        label="Nhập ASIN"
        variant="outlined"
        value={asin}
        onChange={(e) => setAsin(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        sx={{ mt: 2 }}
      >
        Tìm kiếm
      </Button>
    </Container>
  )
}

export default SearchProduct
