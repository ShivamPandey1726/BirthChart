import Card from "./Card";
import ServicesData from "./ServicesData";
import './Services.css';
const ServicePage = () =>
{ 
  console.log(ServicesData);      
  return(
    <div className="service-container">
      <h1>Our Services</h1>
      <div className="grid-template">
        {
          ServicesData.map((data)=>
          {
            return <Card key={data.id} image={data.img} title={data.title} content={data.about} />;
          })
        }
      </div>
    </div>
  );
}
export default ServicePage;