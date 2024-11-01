
import Home from "./pages/Home";
import About from "./pages/About";
import { useEffect } from 'react';
import Contact from "./pages/Contact";
import Layout from "./layouts/Layout";
import { useTranslation } from 'react-i18next';
import { setLanguage } from './features/languageSlice';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch()
  const currentLanguage = useAppSelector((state) => state.language.currentLanguage);

  useEffect(() => {
    dispatch(setLanguage(currentLanguage));
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;