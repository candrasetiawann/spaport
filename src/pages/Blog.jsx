import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
function Blog(){
    const [articles,setArticles] = useState([]);
    const [loading,setLoading] = useState([]);

    useEffect(() => {
        document.title = 'Blog'
    },[])

    useEffect(() => {
        async function getArticles() {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
            const response = await request.json();
            setArticles(response)
            setLoading(false);
            //console.log(response)
        }
        getArticles();
    },[])

  return (
    <>
    <section className="section" >
      <h1 className="section-title" >Blog page</h1>
      <p className="section-description" >Berikut adalah tulisan tulisan saya (tapi bo'ong)</p>
      {loading && (<p>loading articles...</p>)}
      {!loading && (
        <div className="articles" >
          {articles.map((article) => (
            <article key={article.id} className="article">
              <h2 className="article-title" ><a><Link to={`/blog/${article.id}`} >{article.title}</Link></a></h2>
              <time className="article-time" >{new Date(article.publishedAt).toLocaleString()}</time>
            </article>
          ))}
        </div>
      )}
      </section>
    </>
  )
}

export default Blog;