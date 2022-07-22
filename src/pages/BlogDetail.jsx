import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const BlogDetail = () => {
  const params = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound,setNotFound] = useState(false);


    useEffect(() => {
        document.title = 'Blog Detail'
    },[])
 
  useEffect(() => {
    const getArticle = async () => {
      const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);
      if(!request.ok){
          setLoading(false);
          return setNotFound(true);
      }
      const response = await request.json();
      setArticle(response);
      console.log(response);
      setLoading(false);
    }
    getArticle();
  }, [params])

  if(notFound){
      return <h1>artikel tidak ditemukan :(</h1>
  }

  return (
    <section className="section">
      <h1>Blog Detail</h1>
      {loading ? (<p>loading...</p>) : (
        <article className="articles" >
          <h1 className="article-title" >{article.title}</h1>
          <time className="article-time" >{new Date(article.publishedAt).toLocaleString()}</time>
          <img className="article-image" src={article.imageUrl} alt={article.title} />
          <p className="article-summary" >{article.summary}</p>
          <p className="article-source" ><a href={article.url} target="_blank">{article.newsSite}</a></p>
        </article>
      )}
    </section>
  )
}

export default BlogDetail;