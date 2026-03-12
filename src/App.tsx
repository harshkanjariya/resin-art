import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { antdTheme } from './utils/antdTheme';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';

function App() {
  const basename = import.meta.env.BASE_URL === '/' ? '/' : import.meta.env.BASE_URL.replace(/\/$/, '');
  return (
    <ConfigProvider theme={antdTheme}>
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
