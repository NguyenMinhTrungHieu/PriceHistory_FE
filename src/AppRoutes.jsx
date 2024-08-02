// src/AppRouter.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from '~/pages/Error/Error404' // Thêm một trang 404
import Content from '~/pages/Main'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Content} />
        <Route component={NotFound} /> {/* Route cho trang 404 */}
      </Switch>
    </Router>
  )
}

export default AppRouter