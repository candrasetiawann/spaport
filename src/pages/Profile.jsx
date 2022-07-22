import {useEffect} from 'react';
function Profile() {
    useEffect(() => {
        document.title = 'Profile';
    },[])
    return (
        <>
            <section className="section">
                <h1 className="section-title">Profile page</h1>
                <p className="section-description" >Halo namaku Candra</p>
            </section>
        </>
    )
}

export default Profile;