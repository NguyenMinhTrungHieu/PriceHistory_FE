// import { useLocation, Routes, Route } from 'react-router-dom'
// import { Container, Typography, Box } from '@mui/material'
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// import NotFound from '~/components/NotFound'
// import { convertCSVToData } from '~/utilities/ProductUtils/ProductUtils'

// const ProductDetail = () => {
//   const { state } = useLocation()
//   const product = state?.product

//   if (!product) {
//     return (
//       <Routes>
//         <Route path="/404" element={<NotFound />} />
//       </Routes>
//     )
//   }

//   const priceHistory = convertCSVToData(product.amazonPriceHistory)

//   return (
//     <Container>
//       <Box sx={{
//         height: (theme) => `calc(100vh - ${theme.priceHistory.headerHeight} - ${theme.priceHistory.footerHeight})`,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         gap: 2
//       }}>
//         <Box>
//           <Typography variant="h4" gutterBottom>
//             THÔNG TIN SẢN PHẨM:
//           </Typography>
//           <Typography>ASIN: {product.asin}</Typography>
//           <Typography>Tên: {product.name || 'N/A'}</Typography>
//           <Typography variant="h6" gutterBottom>
//             Lịch sử giá:
//           </Typography>
//           {priceHistory.length > 0 ? (
//             <ResponsiveContainer width="100%" height={400}>
//               <LineChart data={priceHistory}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="timestamp" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
//               </LineChart>
//             </ResponsiveContainer>
//           ) : (
//             <Typography>N/A</Typography>
//           )}
//         </Box>
//       </Box>
//     </Container>
//   )
// }

// export default ProductDetail

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// import { useState } from 'react'
// import { useLocation, Routes, Route } from 'react-router-dom'
// import NotFound from '~/components/NotFound'
// import { Container, Box, Typography, Button, ButtonGroup } from '@mui/material'
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
// import { convertCSVToData } from '~/utilities/ProductUtils/ProductUtils'

// const groupDataByInterval = (data, interval) => {
//   const groupedData = {}
//   data.forEach(entry => {
//     const date = new Date(entry.timestamp)
//     let key
//     if (interval === 'week') {
//       key = `${date.getFullYear()}-W${Math.ceil((date.getDate() - date.getDay() + 1) / 7)}`
//     } else if (interval === 'month') {
//       key = `${date.getFullYear()}-${date.getMonth() + 1}`
//     } else if (interval === 'year') {
//       key = `${date.getFullYear()}`
//     }
//     if (!groupedData[key]) {
//       groupedData[key] = { timestamp: key, price: 0, count: 0 }
//     }
//     groupedData[key].price += entry.price
//     groupedData[key].count += 1
//   })

//   return Object.values(groupedData).map(entry => ({
//     timestamp: entry.timestamp,
//     price: (entry.price / entry.count).toFixed(2)
//   }))
// }

// const ProductDetail = () => {
//   const { state } = useLocation()
//   const product = state?.product

//   const [interval, setInterval] = useState('all') // Default to 'all'

//   if (!product) {
//     return (
//       <Routes>
//         <Route path="/404" element={<NotFound />} />
//       </Routes>
//     )
//   }

//   let priceHistory = []
//   if (Array.isArray(product.amazonPriceHistory)) {
//     priceHistory = convertCSVToData(product.amazonPriceHistory)
//   } else {
//     // eslint-disable-next-line no-console
//     console.error('product.amazonPriceHistory is not an array')
//   }

//   const filteredPriceHistory = interval === 'all' ? priceHistory : groupDataByInterval(priceHistory, interval)

//   return (
//     <Container>
//       <Box
//         sx={{
//           height: (theme) =>
//             `calc(100vh - ${theme.priceHistory.headerHeight} - ${theme.priceHistory.footerHeight})`,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           gap: 2
//         }}
//       >
//         <Box>
//           <Typography variant="h4" gutterBottom>
//             THÔNG TIN SẢN PHẨM:
//           </Typography>
//           <Typography>ASIN: {product.asin}</Typography>
//           <Typography>Tên: {product.name || 'N/A'}</Typography>
//           <Typography variant="h6" gutterBottom>
//             Lịch sử giá:
//           </Typography>
//           <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ marginBottom: 2 }}>
//             <Button onClick={() => setInterval('week')}>Tuần</Button>
//             <Button onClick={() => setInterval('month')}>Tháng</Button>
//             <Button onClick={() => setInterval('year')}>Năm</Button>
//             <Button onClick={() => setInterval('all')}>Toàn bộ</Button>
//           </ButtonGroup>
//           {filteredPriceHistory.length > 0 ? (
//             <ResponsiveContainer width="100%" height={400}>
//               <LineChart data={filteredPriceHistory}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="timestamp" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
//               </LineChart>
//             </ResponsiveContainer>
//           ) : (
//             <Typography>N/A</Typography>
//           )}
//         </Box>
//       </Box>
//     </Container>
//   )
// }

// export default ProductDetail

// -------------------------------------------------------------------------------------------------------------------------------------------------------

import { useState, useEffect } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import NotFound from '~/components/NotFound'
import { Container, Box, Typography, Button, ButtonGroup } from '@mui/material'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { convertCSVToData } from '~/utilities/ProductUtils/ProductUtils'

const filterDataByInterval = (data, months) => {
  if (months === 'all') return data

  const now = new Date()
  const pastDate = new Date(now.setMonth(now.getMonth() - months))
  // eslint-disable-next-line no-console
  console.log(`Filtering data from ${pastDate.toISOString()} to now`)

  const filteredData = data.filter(entry => new Date(entry.timestamp) >= pastDate)
  // eslint-disable-next-line no-console
  console.log(`Filtered data length for ${months} months:`, filteredData.length)
  return filteredData
}

const ProductDetail = () => {
  const { state } = useLocation()
  const product = state?.product

  const [interval, setInterval] = useState('all') // Default to 'all'
  const [priceHistory, setPriceHistory] = useState([])

  useEffect(() => {
    if (Array.isArray(product?.amazonPriceHistory)) {
      const convertedData = convertCSVToData(product.amazonPriceHistory)
      setPriceHistory(convertedData)
    } else {
      // eslint-disable-next-line no-console
      console.error('product.amazonPriceHistory is not an array')
    }
  }, [product])

  const filteredPriceHistory = filterDataByInterval(priceHistory, interval)

  if (!product) {
    return (
      <Routes>
        <Route path="/404" element={<NotFound />} />
      </Routes>
    )
  }

  return (
    <Container>
      <Box
        sx={{
          height: (theme) =>
            `calc(100vh - ${theme.priceHistory.headerHeight} - ${theme.priceHistory.footerHeight})`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2
        }}
      >
        <Box>
          <Typography variant="h4" gutterBottom>
            THÔNG TIN SẢN PHẨM:
          </Typography>
          <Typography>ASIN: {product.asin}</Typography>
          <Typography>Tên: {product.name || 'N/A'}</Typography>
          <Typography variant="h6" gutterBottom>
            Lịch sử giá:
          </Typography>
          <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ marginBottom: 2 }}>
            {/* <Button onClick={() => setInterval(1)}>1 Tháng</Button> */}
            <Button onClick={() => setInterval(3)}>3 Tháng</Button>
            <Button onClick={() => setInterval(6)}>6 Tháng</Button>
            <Button onClick={() => setInterval(12)}>1 Năm</Button>
            <Button onClick={() => setInterval('all')}>Toàn bộ</Button>
          </ButtonGroup>
          {filteredPriceHistory.length > 0 ? (
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={filteredPriceHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="timestamp"
                  tickFormatter={(tick) => {
                    const date = new Date(tick)
                    if (interval === 1) {
                      return `${date.getDate()}/${date.getMonth() + 1}`
                    } else if (interval <= 3) {
                      return `${date.getMonth() + 1}/${date.getFullYear()}`
                    } else if (interval <= 12) {
                      return `${date.getMonth() + 1}/${date.getFullYear()}`
                    } else {
                      return `${date.getMonth() + 1}/${date.getFullYear()}`
                    }
                  }}
                />
                <YAxis
                  domain={[0, 350]} // Tối thiểu là 200, tối đa là 400
                  tickCount={8} // Hiển thị 6 giá trị trên trục Y
                  tickFormatter={(tick) => tick} // Định dạng các giá trị tick
                />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <Typography>N/A</Typography>
          )}
        </Box>
      </Box>
    </Container>
  )
}

export default ProductDetail