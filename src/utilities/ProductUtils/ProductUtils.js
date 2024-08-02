// function convertKeepaTimeToDate(keepaTime) {
//   // Chuyển đổi Keepa Time minutes thành timestamp (milliseconds từ Epoch time)
//   const timestamp = (keepaTime + 21564000) * 60 * 1000

//   // Tạo một đối tượng Date từ timestamp đã tính được
//   const updateDate = new Date(timestamp)

//   // Lấy ngày hiện tại
//   const currentDate = new Date()

//   // Tính độ chênh lệch giữa ngày hiện tại và ngày cập nhật gần đây nhất (đơn vị milliseconds)
//   const diffMilliseconds = currentDate.getTime() - updateDate.getTime()

//   // Chuyển đổi đơn vị milliseconds thành ngày tháng giờ phút giây
//   const diffSeconds = Math.floor(diffMilliseconds / 1000)
//   const diffMinutes = Math.floor(diffSeconds / 60)
//   const diffHours = Math.floor(diffMinutes / 60)
//   const diffDays = Math.floor(diffHours / 24)

//   // Kết quả trả về dưới dạng chuỗi
//   return `${diffDays} ngày ${diffHours % 24} giờ ${diffMinutes % 60} phút`
// }

// Hàm chuyển đổi dữ liệu trường csv sang định dạng thường
const convertCSVToData = (csv) => {
  const data = []
  for (let i = 0; i < csv.length; i += 2) {
    const timestamp = csv[i]
    const price = csv[i + 1]

    // Chỉ thêm giá trị hợp lệ
    if (price >= 0) {
      data.push({
        timestamp: new Date((timestamp + 21564000)* 60 * 1000).toLocaleDateString(), // Chuyển đổi thành ngày tháng
        price: price/100 // Chuyển đổi giá từ cents thành dollars
      })
    }
  }

  return data
}

const getFirstPrice = (listPrice) => {
// Kiểm tra nếu listPrice là một mảng và có ít nhất 2 phần tử
  if (Array.isArray(listPrice) && listPrice.length > 1) {
    return listPrice[1]
  } else {
    // Xử lý trường hợp không có giá
    // console.warn('Danh sách giá không hợp lệ hoặc không có giá.');
    return null
  }
}

export { convertCSVToData, getFirstPrice }