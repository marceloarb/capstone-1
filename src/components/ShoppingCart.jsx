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
			<Row style={{ display: 'flex', justifyContent: 'center' }}>
				<h3>Shopping Cart</h3>
			</Row>
			<Row>
				<Table striped bordered hover>
						<tr>
							<th>Product Name</th>
							<th>Price</th>
							<th>Amount In Cart</th>
							<th>Remove From Cart</th>
						</tr>
						{data.map(item => (
							<tr>
								<td>{item.title}</td>
								<td>{item.price}</td>
								<td>Total</td>
								<td>
										<button type="submit">Show Me</button>
								</td>
							</tr>
						))}
				</Table>
			</Row>
			<Row style={{ display: 'flex', justifyContent: 'center' }}>
				<Form
					onSubmit={e => {
						e.preventDefault();
					}}
				>
					<Button type="submit" className="btn btn-secondary">
						Complete Purchase
					</Button>
				</Form>
			</Row>
		</Container>
	);
}

export default ShoppingCart;