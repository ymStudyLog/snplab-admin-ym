import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Region from '../components/modal/Region';
import Admin from '../pages/Admin';
import ApplicationForm from '../pages/ApplicationForm';
import Landing from '../pages/Landing';
import PrivacyPolicy from '../pages/PrivacyPolicy';

type Props = {};

const Router = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/form' element={<ApplicationForm />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/agreement' element={<PrivacyPolicy />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
