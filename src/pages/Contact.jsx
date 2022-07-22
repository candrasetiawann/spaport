import {useEffect} from 'react';

function Contact() {

    useEffect(() => {
        document.title = 'Contact'
    },[])
  return (
    <>
      <section className="Section" >
        <h1 className="section-title" >Contact page</h1>
        <p className="section-description" >Anda dapat menghubungiku di </p>
        <ul>
          <li>Wa :081234567891</li>
          <li>Email :candra@gantengbanget.com</li>
        </ul>
      </section>
    </>
  )
}

export default Contact;