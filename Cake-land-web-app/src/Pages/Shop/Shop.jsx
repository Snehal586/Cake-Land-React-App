import {React,Component} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverview from '../../Components/collection-overview/collection-overview';
import CollectionPage from '../Collection/Collection';
import { convertCollectionsSnapshotToMap, firestore } from '../../Firebase/firebase.util';
import { updateCollections } from '../../Redux/shop/shop.actions';
import WithSpinner from '../../Components/with-spinner/with-spinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    state = { 
        loading:true
     }
    unsubscribeFromSnapshot = null;
    componentDidMount(){
        const { updateCollections} = this.props;
        const collectionRef= firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap); 
            this.setState({loading:false}); 
        });
    }
    render() { 
        const { match } = this.props;
        const {loading} = this.state;
        return ( 
            <div className="shop-page">
                {/* <CollectionOverview /> */}
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading}{...props} /> } />
                {/* Nested Routes  */}
                <Route path={`${match.path}/:categoryId`} render={(props) => <CollectionPageWithSpinner isLoading={loading}{...props} />}/>
            </div>
         )
    }
}
 

const mapDispatchToProps = dispatch => ({
    updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null,mapDispatchToProps)(ShopPage);