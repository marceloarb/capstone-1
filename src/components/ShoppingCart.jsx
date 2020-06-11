import React, {useState} from 'react';
import {Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimatedButton from 'react-animated-buttons';
import {Container, Row,Table
  } from 'reactstrap';




const ShoppingCart = (props)=>{
	const data = props.products; 
	let total = 0;
	const totalAmount = data.map(item=> total += item.price);

	function removeItemFromShoppingCart(i){
		const newData = data.filter((item,index)=>{
			if(index !== i){
				return item;
			}
		})
		props.setProducts(newData);
	}

	const removeAllItems = () =>{
		alert("Are you sure ?")
			props.setProducts([]);
		
		
	}


	function handleClick(){
		return alert("Thank you for your purchase!")
	}
		
	

  return (
		<Container id="mainList">
				<h3 style={{textAlign:"center"}}>Shopping Cart</h3>
			<Row>
				<Table striped bordered  >
						<tr>
							<th>Product Name</th>
							<th>Quantity</th>
							<th>Price</th>
							<th>Remove Item</th>
						</tr>
						{data.map((item,index) => (
							<tr>
								<td>{item.title}</td>
								<td>{item.inventory}</td>
								<td>{item.price}</td>
								<td>
										<AnimatedButton onClick={()=>removeItemFromShoppingCart(index)} key={index} color="danger">Remove Item</AnimatedButton>
								</td>
							</tr>
						))}
						<tr>
							<td>Total Amount</td>
							<td>{total}</td>
							<td><AnimatedButton onClick={handleClick} >Proceed to checkout</AnimatedButton></td>
							<td><AnimatedButton onClick={removeAllItems} color="danger">Remove all</AnimatedButton></td>
						</tr>
				</Table>
			</Row>
		</Container>
	);
}

export default ShoppingCart;