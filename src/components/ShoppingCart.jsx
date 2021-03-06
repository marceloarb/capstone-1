import React, {useState} from 'react';
import {Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row,Table,Button
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
										<Button onClick={()=>removeItemFromShoppingCart(index)} key={index} color="danger">Remove Item</Button>
								</td>
							</tr>
						))}
						<tr>
							<td>Total Amount</td>
							<td>{total}</td>
							<td><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
								<input type="hidden" name="cmd" value="_s-xclick"/>
								<input type="hidden" name="hosted_button_id" value="5ABK49N83VF5N"/>
								<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
								<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
								</form>
								</td>
							<td><Button onClick={removeAllItems} color="danger" >Remove all</Button></td>
						</tr>
				</Table>
			</Row>
		</Container>
	);
}

export default ShoppingCart;