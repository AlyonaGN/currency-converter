import React from 'react';
import { useLocation } from 'react-router-dom';
import ROUTES_MAP from '../utils/routesMap';
import PAGE_TITLES from '../utils/consts-titles';

const Header = () => {
  const location = useLocation();
  const title = location.pathname === ROUTES_MAP.CONVERTER
    ? PAGE_TITLES.CONVERTER : PAGE_TITLES.CURRENCY_TABLE;
  return (
    <h1 className="page__header">{title}</h1>
  );
};

export default Header;
