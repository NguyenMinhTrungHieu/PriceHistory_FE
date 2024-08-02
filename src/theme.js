import { experimental_extendTheme as extendsTheme } from '@mui/material/styles'
import { blueGrey, lightBlue } from '@mui/material/colors'

// Create a theme instance
const theme = extendsTheme({
  priceHistory: {
    headerHeight: '50px',
    footerHeight: '60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: lightBlue[500],
          light: lightBlue[100],
          dark: lightBlue[900]
        },
        background: {
          default:  blueGrey[50], // Đặt màu nền mặc định là Indigo
          paper: lightBlue[100] // Đặt màu nền cho các phần tử như giấy, thẻ, v.v.
        }
      },
      typography: {
        allVariants: {
          color:  lightBlue[500] // Màu chữ tùy chỉnh cho tất cả các biến thể
        }
        // Thêm các tùy chỉnh khác nếu cần
      }
    }
  }
})

export default theme