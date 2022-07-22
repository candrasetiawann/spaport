import {useEffect} from 'react';
function Home(){
    useEffect(() => {
        document.title = 'Home'
    },[])
  return (
    <>
    <section className="section">
        <h1 className="section-title" >Welcome to my personal blog</h1>
        <p className="section-description" >Halo nama saya Candra Setiwan</p>
    </section>
    </>
  )
}

export default Home;