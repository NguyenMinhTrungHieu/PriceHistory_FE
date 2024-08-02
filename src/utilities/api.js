import axios from 'axios'

// Cấu hình cơ bản cho client API
const api = axios.create({
  baseURL: 'http://localhost:3000/v1/products', // Thay thế bằng API URL
  headers: {
    'Content-Type': 'application/json'
    // Thêm các header khác nếu cần
  }
})

export default api
