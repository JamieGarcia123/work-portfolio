

import{ certifications } from "../../api/certification"
import { educationalItems } from "../../api/education"

import "./education.css"


const EducationPage = () => {


  return (
   
        <section className="certContainer">
           <h1>Education</h1>
           <div className="certContent">
            {educationalItems.map(item => (
         <> 
          <div className="certContent">
            <h3>{item.school}</h3>
              <p>{item.dates}</p>
              <p>{item.degree}</p>
          </div>
          </>)
          )}
          </div>

          <h2>Certifications</h2>
         {certifications.map(cert => (
         <> 
          <div className="certContent">
            <div  className="certCard">
              <div className="certCard-front">
                <h3>{cert.name}</h3>
                <p>{cert.distributor}</p>
                {cert?.issued ? <p>Issued: {cert.issued}</p> : <p>''</p> }
                {cert?.expiration ? <p>Expires: {cert.expiration}</p> : <p>Expires: Does not expire.</p>}
                <div  className="certCard-back" ><div id={cert.id}></div></div>
              </div>
              
            </div>
          </div>
          </>)
          )}
        </section>
  );
}

export default EducationPage;



