import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import NewsPage from './pages/NewsPage';

/*
https://jsonplaceholder.typicode.com/todos/1
*/
function App() {
  // const [category, setCategory] = useState("technology");
  // const onChangeCategory = newCategory => {
  //   setCategory(newCategory);
  //   console.log("선택된 카테고리 : ", newCategory);
  // };

  return (
    // <div>
    //   <Categories category={category} onChangeCategory={onChangeCategory} />
    //   <NewsList category={category} />
    // </div>
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
}

export default App;
