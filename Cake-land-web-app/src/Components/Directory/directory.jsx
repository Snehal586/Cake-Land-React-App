import React  from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../Redux/directory/directory.selector';
import MenuItem from '../menu-items/menu-items';
import './directory.scss';


const Directory = ({sections}) =>  (
    

            <div className="directory-menu">
                {
                    
                    sections.map(
                        ({id,...otherSectionsProps}) => (
                            <MenuItem key={id} {...otherSectionsProps}/>
                        )
                    )
                    
                }
            </div>

         );

const mapStateToProps = createStructuredSelector({
    sections : selectDirectorySections
})
 
export default connect(mapStateToProps)(Directory);

