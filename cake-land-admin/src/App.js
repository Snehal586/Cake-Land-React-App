import "./App.css";
import {  useEffect, useState } from "react";
import Header from "./Components/Header/Header";
// import FormInput from "./Components/form-input/form-input";
import { db } from "./firebase";


const App = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState('');
  const [address,setAddress] = useState('');
  const [orders,setOrders] = useState([]);


  //Firebase Data featch
  useEffect(() => {
      db.collection('all_transaction').onSnapshot(snapshot => {
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

  // console.log(orders);


  return ( 
    <div className="MainPage holder">
        <div className="app">
          <Header />
        </div>
        <div className="containers">
          <div className="card">
            <div className="title">Change Details</div>

            <div className="sign-up">
              <div className="sign-up-form">
                <div className="group">
                <input
                  type="text"
                  className="form-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                 <label className={`${name ? "shrink":""}form-input-label`}>
                    Name
                </label>
                </div>
                <div className="group">
                <input
                  type="email"
                  className="form-input"
                  value={email} //sanket
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email"
                  required
                />
                <label className={`${email ? "shrink":""}form-input-label`}>
                    Email
                </label>
                </div>
                <div className="group">
                <input
                  type="text"
                  className="form-input"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  label="Address"
                  required
                />
                <label className={`${address ? "shrink":""}form-input-label`}>
                    Address
                </label>
                </div>
              </div>
            </div>
          </div>
          <div className="see-table">
            <table className="table">
              <thead>
                <tr className="col">
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  {/* <th scope="col">Date</th> */}
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                { 
                
                  orders.map(order => (
                    <tr  key={order.id}>
                      {/* <th>{order.id}</th> */}
                      <th className="check" scope="row">{order.username}</th>
                      <th className="check"  >{order.email}</th>
                      <th className="check">{order.address}</th>
                      <th className="check" > <div className="btn btn-success"
                      
                      onClick={
                        () => {
                          if(!name || !email || !address){
                            alert("You Need To fill all Fields");
                          }else{
                            db.collection('all_transaction').doc(order.id).set({
                              username : name,
                              email: email,
                              address : address
                            });
                          }
                        }
                      }
                      
                      >Update</div></th>
                      <th className="check"> <div className="btn btn-danger"
                      onClick={() => {
                        db.collection('all_transaction').doc(order.id).delete()
                      }}
                      >Delete</div></th>
                    </tr>
                  ))
                  
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
   );
}
 
export default App;


