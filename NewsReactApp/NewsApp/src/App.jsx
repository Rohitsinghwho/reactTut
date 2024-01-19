import React,{useState} from 'react';
import Navbar from './Components/Navbar.jsx';
import Card from './Components/Card.jsx';
import Footer from './Components/Footer.jsx';
import useCategory from './hooks/useCategory.js'
export default function App() {
  const [category,setCategory]=useState('business')
  const [pageNum,setPageNum]=useState(1)
  const {data,totalResults}= useCategory(category,pageNum);
  return (
    <div>
      <Navbar  selectedCategory={category} ChangeCategroy={(category)=>setCategory(category)} />
       <div className="mt-5 gap-5 h-full  p-3 flex flex-wrap justify-center">
        {data.map(article=>
          <Card key={article.url} ArticleUrl={article.url} ImageUrl={article.urlToImage} title={String(article.title).slice(0,20)} description={String(article.description).slice(0,50)}/>
          )}
      </div>
      <Footer pageNumber={pageNum} changePage={(page)=>setPageNum(page)} TotalResultsValue={totalResults}/>
    </div>
  );
}
