import React from 'react';
import Data from '../data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../images';
import {Link} from 'react-router-dom';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';

// function importAll(img){
//     let useImg = {}
//     img.keys().forEach((item, index)=>{
//         useImg[item.replace("./",'')] = img(item);
//     });
//     console.log(useImg);
//     return useImg;
// }


const DisplayAll = ()=>{

    return (
        Data.map((db,index)=>{
            return (
                <CardGroup style={{width:"33%", display:"inline-block"}} >
                    <Card>
                        <CardImg top width="100%" src="" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>{db.title}</CardTitle>
                        <CardSubtitle>{db.id}</CardSubtitle>
                        <CardText><p>Price</p>{db.price}</CardText>
                        <Link to={`/product/${db.id}`}>Details</Link>
                        </CardBody>
                    </Card>
      
                </CardGroup>
                
            
            )
        })
    )
    

} 

export default DisplayAll;