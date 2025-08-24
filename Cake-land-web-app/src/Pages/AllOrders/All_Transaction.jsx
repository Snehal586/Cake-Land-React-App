import React, { useEffect, useState } from 'react';
import { firestore } from '../../Firebase/firebase.util';



const AllTransactions = () => {

    const [orders,setOrders] = useState([]);

    useEffect(() => {
        firestore.collection('all_transaction').onSnapshot(snapshot => {
            setOrders(snapshot.docs.map(
                doc => (
                    {
                    id:doc.id,
                    username:doc.data().username,
                    price:doc.data().price,
                    email:doc.data().email,
                    address:doc.data().address,
                    items:doc.data().items,
                    timestamp:doc.data().timestamp
                })))

        })
    },[])

    console.log(orders);
    return ( 
        <div className="all_transaction">
             <table className="table">
  <thead>
    <tr>
      <th scope="col">username</th>
      <th scope="col">email</th>
      <th scope="col">Address</th>
      <th scope="col">Price</th>
      <th scope="col">Items</th>
      <th scope="col">Time</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
    
     
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
                    <td>{`${order.timestamp.toDate()}`}</td>
                    <td><button className="btn btn-danger"
                    onClick={(e) => firestore.collection('all_transaction').doc(order.id).delete()}
                    >Delete</button></td>
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
 
export default AllTransactions;