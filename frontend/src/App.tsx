import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { antdTheme } from './utils/antdTheme.ts';
import MainLayout from './layouts/MainLayout.tsx';
import HomePage from './pages/HomePage.tsx';
import CustomOrderForm from './sections/CustomOrderForm.tsx';

function App() {
  const basename =
      import.meta.env.BASE_URL === '/' ? '/' : import.meta.env.BASE_URL.replace(/\/$/, '');

  return (
      <ConfigProvider theme={antdTheme}>
        <Router basename={basename}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
            </Route>

            <Route
                path="/custom-order"
                element={
                  <div className="min-h-screen flex items-center justify-center bg-brand-gradient p-4">
                    <div className="max-w-2xl w-full">
                      <CustomOrderForm />
                    </div>
                  </div>
                }
            />
          </Routes>
        </Router>
      </ConfigProvider>
  );
}

export default App;