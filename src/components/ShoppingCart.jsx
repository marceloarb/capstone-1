import React, {useState} from 'react';
import Data from '../data.json'
import {Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody,Container, Row, Col,Jumbotron,Table,Form
  } from 'reactstrap';




const ShoppingCart = (props)=>{
 
  const data = props.products;
  console.log(data);


  return (
		<Container id="mainList">
				<h3 style={{textAlign:"center"}}>Shopping Cart</h3>
			<Row>
				<Table striped bordered  >
						<tr>
							<th>Product Name</th>
							<th>Price</th>
							<th>Amount In Cart</th>
							<th>Remove Item</th>
						</tr>
						{data.map(item => (
							<tr>
								<td>{item.title}</td>
								<td>{item.price}</td>
            <td>{()=>{
              item.price += item.price;
            }}</td>
								<td>
										<button type="submit">Remove Item</button>
								</td>
							</tr>
						))}
				</Table>
			</Row>
		</Container>
	);
}

export default ShoppingCart;