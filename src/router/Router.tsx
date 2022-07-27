import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from '../pages/Admin';
import ApplicationForm from '../pages/ApplicationForm';
import Landing from '../pages/Landing';
import { ScrollToTop } from '../utils/ScrollToTop';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/form' element={<ApplicationForm />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
