import React, { useState } from 'react';
import { firestore } from '../../Firebase/firebase.util';
import firebase from 'firebase';
import './Orders.css';

const Orders = () => {
    const [orders,setOrders] = useState([]);
    var user = firebase.auth().currentUser;
    var userid
    if(user){
        userid = user.uid;
    }
    if(userid){
        firestore.collection('users').doc(userid).collection('Orders').onSnapshot(
            snapshot => {
                setOrders(snapshot.docs.map(
                    doc => (
                        {
                            id:doc.id,
                            username:doc.data().username,
                            price:doc.data().price,
                            email:doc.data().email,
                            address:doc.data().address,
                            items:doc.data().items
                        }
                    )
                ))
            }
        )
    }
    // getData = () => {
    //     firestore.collection('all_transaction').onSnapshot(snapshot => {
    //         setOrders(snapshot.docs.map(
    //             doc => (
    //                 {
    //                 id:doc.id,
    //                 username:doc.data().username,
    //                 price:doc.data().price,
    //                 email:doc.data().email,
    //                 address:doc.data().address,
    //                 items:doc.data().items})))
    //     })
    // }) 

    return ( 
        <div className="orders"   >

            <table className="table" >
  <thead>
    <tr>
      <th scope="col">username</th>
      <th scope="col">email</th>
      <th scope="col">Address</th>
      <th scope="col">Price</th>
      <th scope="col">Items</th>

    </tr>
  </thead>
  <tbody className="table_body">
    
     
      {
          orders.map(
              order => {
                  return (
                    <tr key={order.id}>
                    <td>{order.username}</td>
                    <td>{order.email}</td>
                    <td>{order.address}</td>
                    <td>{order.price}</td>
                    
                    <td>
                        {
                            order.items.map(item => `${item.name} (${item.quantity}), `)
                        }
                        
                    </td>
                 </tr>
                  )
              }
          )
      }
    
  </tbody>
</table> 
        </div>
     );
}
export default Orders;