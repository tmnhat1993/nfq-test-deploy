// Modules
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import ImageItem from "../../components/image-item/image-item.component";

// Temporary use dummy data for layout purpose
const CollectionPage = ({collection, removeItem, favItem}) => {
    return (
        <div className='searchPage'>

            {/* Page Header */}
            <div className="section section-page-header">

                {/* Container Wrapper */}
                <div className="container">
                    <div className="row space-between">
                        <h3 className="page-title">
                            NASA Collections
                        </h3>
                        <Link to="/search" className="cta add-item">
                            Add New Item
                        </Link>
                    </div>
                </div>

            </div>

            {/* Image List */}
            <div className="section section-image-list">

                {/* Container Wrapper */}
                <div className="container">
                    <ul className="row align-top image-list">
                        { collection.map( (value, index) => {
                            console.log(value);

                            let { date_created, title, center, description } = value.data[0];
                            let imgUrl = value.links[0].href;
                            let { favorite } = value;

                            return (
                                <ImageItem key={'nasa-collection-item' + index}
                                           date_created={ date_created }
                                           title={ title }
                                           center={ center }
                                           description={ description }
                                           imgUrl={ imgUrl }
                                           isFav = { favorite }
                                           favorite={() => { favItem(index) }}
                                           remove={()=>{ removeItem(index) }}
                                />
                            )
                        })}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default CollectionPage;