import React, { useState, useEffect } from 'react';
import {Table, Button} from 'reactstrap';
import MyPageCards from './MyPageCards';


const ProductView = (props) => {

    const deleteProduct = (product) => {

        fetch(`http://localhost:3000/product/delete/${product.id}` ,{
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then( () => {
            props.getListOfProducts();
        })
    }


    const productListMapper = () => {
        return props.productList.map((product, index) => {
            
            return(
                <tr key={index}>
                    <td>
                         <MyPageCards productItem={product}/>                       
                    </td>
                    <td className='align-middle text-center'>
                        <Button color="warning" onClick={() => {props.editUpdateProduct(product); props.updateOn()}}>Edit</Button>{' '}

                        <Button color="danger" onClick={() => {deleteProduct(product)}}>Delete</Button>
                    </td>
                </tr>
            )

        })
    }

    return ( 
        <>
        <h3>My shop</h3>
         <br/>
        <Table >
            <tbody>
                {props.productList.length === 0 ? 
                    <h4>You have no product for sale yet.. Use the bar on the left to list some</h4> :
                productListMapper()
                }
                
            </tbody>
        </Table>    
         </>
     );
}
 
export default ProductView;