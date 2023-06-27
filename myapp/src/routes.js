import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/index'
import { PageBase } from './pages/PageBase';

function Approutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PageBase />}>
            <Route index element={<Home />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default Approutes;
