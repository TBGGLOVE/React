import React, { useCallback, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import NewsItems from './NewsItems';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  //상태 변수로 관리 (목록, 로딩중)
  //1. 서버에서 자료를 로딩한다 -> 비동기
  //2. 서버에 요청한 자료가 로딩중 일때는 화면에 로딩중 ...
  //3. 서버에 요청한 자료가 로딩 완료되면 출력
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=ae3df86896064a709c97f5898afccbc5`,
    );
  }, [category]);

  //  const [articles, setArticles] = useState(null); //[article, article, article, article];
  //const [loading, setLoading] = useState(false);

  // const fetchData = useCallback(async () => {
  //   const query = category === "all" ? "" : `&category=${category}`;
  //   const response = await axios.get(
  //     `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=ae3df86896064a709c97f5898afccbc5`
  //   );
  //   setArticles(response.data.articles);
  //   //서버에 요청한 자료가 로딩 완료되면 완료 설정
  //   setLoading(false);
  // }, [category]);

  // useEffect(() => {
  //   try {
  //     setLoading(true);

  //     fetchData();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, [category]);

  if (loading) {
    return <NewsListBlock>서버에서 뉴스 로딩중 ...</NewsListBlock>;
  }

  if (!response) {
    return <NewsListBlock>서버에서 뉴스가 없습니다</NewsListBlock>;
  }

  if (error) {
    return <NewsListBlock>에러 발생</NewsListBlock>;
  }

  const { articles } = response.data;

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItems article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
