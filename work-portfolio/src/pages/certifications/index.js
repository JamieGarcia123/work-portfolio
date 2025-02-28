

import certifications from "../../api/certification"

const Certifications = () => {
  return (
    <div className="container" >
        <header>
          Current Certifications
        </header>
        <section>
          {certifications.map(cert => (
          <><div>{cert.name}</div>
            <div>{cert.distributor}</div>
            <div>{cert.expiraton}</div>
            </>)
          )}
        </section>
        <aside>
            
        </aside>
     
    </div>
  );
}



export default Certifications;