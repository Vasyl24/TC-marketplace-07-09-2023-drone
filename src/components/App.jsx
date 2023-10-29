import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import NotFound from '../pages/notFound';
import HomePage from '../pages/home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<div>Каталог</div>} />
          <Route path="articles" element={<div>Статті</div>} />
          <Route path="manufacturers" element={<div>Виробники</div>} />
          <Route path="user" element={<div>Особистий кабінет</div>} />
          <Route path="favorites" element={<div>Перелік улюбленних</div>} />
          <Route path="cart" element={<div>Кошик</div>} />

          <Route path="about" element={<div>Про нас</div>} />
          <Route path="delivery" element={<div>Доставка і оплата</div>} />
          <Route path="returns" element={<div>Повернення та обмін</div>} />
          <Route path="contacts" element={<div>Контакти</div>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
