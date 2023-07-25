import React from 'react';
import { useParams } from '../../node_modules/react-router-dom/dist/index';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = () => {
  const params = useParams();
  const category = params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
