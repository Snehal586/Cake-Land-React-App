import React from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from '../Collection-item/Collection-item';
import './Collection-Preview.scss';


const CollectionPreview = ({title,items,routeName}) => {
    // console.log(items);
    
    return ( 
        <div className="collection-preview">
            <Link className="title" to={`shop/${routeName}`} >
                {title.toUpperCase()}
            </Link>
            <div className="preview">
                {
                    items.filter((index,idx) => idx < 4).map((item) => (
                       <CollectionItem key={item.id} item={item}/> 
                    ))
                }
            </div>
        </div>
     );
}
 
export default CollectionPreview;