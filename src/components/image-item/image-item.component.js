import React from 'react';
import './image-item.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHeart, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';



const ImageItem = ( {imgUrl, center, date_created, title, description, isFav, add, edit, remove, favorite} ) => {
    return (
        <li className="image-item">
            <div className="image-thumbnail">
                <div className="main-image">
                    <div className="image-holder"
                         style={{backgroundImage: 'url("' + imgUrl + '")'}}/>
                </div>
                <div className="image-shadow"/>
            </div>

            <div className="image-context">
                <div className="row space-between">
                    <p className="author">{ center }</p>
                    <p className="date-created">{ date_created ? date_created.substr(0,10): null}</p>
                </div>

                <div className="context-detail">
                    <h3 className="title">{ title }</h3>
                    <p className="description">{ description }</p>
                </div>

                <ul className="row image-cta">
                    { add ? <li>
                        <button className="cta" onClick={ add }>
                            <FontAwesomeIcon icon={faPlus} className="inactive" size="lg"/>
                        </button>
                    </li>: null }
                    { favorite ? <li>
                        <button className="cta" onClick={ favorite }>
                            <FontAwesomeIcon icon={faHeart} className={isFav ? 'active-heart': 'inactive'} size="lg"/>
                        </button>
                    </li>: null }
                    { edit ? <li>
                        <button className="cta" onClick={ edit }>
                            <FontAwesomeIcon icon={faEdit} className="inactive" size="lg"/>
                        </button>
                    </li>: null }
                    { remove ? <li>
                        <button className="cta" onClick={ remove }>
                            <FontAwesomeIcon icon={faTrash} className="inactive" size="lg"/>
                        </button>
                    </li>: null }
                </ul>
            </div>
        </li>
    )
};

export default ImageItem;