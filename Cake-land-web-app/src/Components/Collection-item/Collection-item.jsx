import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../Redux/Cart/cart.actions';
import CustomButton from '../CustomButton/custom-button';
import './Collection-item.scss';



const CollectionItem = ({item,addItem}) => {
    const {id,name,price,imageUrl} = item;
    return ( 
        <div className="collection-item" key={id}>
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}}></div>
            <div className="collection-footer">
                <span className="name">
                    {name}
                </span>
                <span className="price">
                    ₹{price}
                </span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
        </div>
     );
}


//After click on Add To Cart Button adding that item in redux ADD_ITEM []
const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
});


 
export default connect(null,mapDispatchToProps)(CollectionItem);