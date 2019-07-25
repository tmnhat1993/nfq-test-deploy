// Modules
import React from 'react';
import { Link } from 'react-router-dom'

// Components
import ImageItem from "../../components/image-item/image-item.component";

// Stylesheet
import './search.styles.scss';


// Temporary use dummy data for layout purpose
class SearchPage extends React.Component{
    searchTimeout = null;

    constructor() {
        super();
        this.state = {
            searchTerm: '',
            searchResult: [],
            isSearching: false
        }
    }

    search = (e) => {
        let context = e.target.value;
        clearTimeout(this.searchTimeout);

        // show processing placeholder
        this.setState({isSearching: true});

        // set search timeout
        this.searchTimeout = setTimeout(() => {

            // Update search term after every 300ms
            this.setState({searchTerm: context}, () => {

                // Search using the new search term
                fetch(`https://images-api.nasa.gov/search?q=${encodeURIComponent(this.state.searchTerm)}`)
                    .then((res) => res.json())
                    .then((data) => {

                        // Update data & reset isSearching flag
                        this.setState({searchResult: data.collection ? data.collection.items: [], isSearching: false});

                    });

            });

        },300);
    }

    render() {
        let { searchResult, isSearching } = this.state;
        return (
            <div className="searchPage">

                {/* Page Header */}
                <div className="section section-page-header">
                    <div className="container">
                        <div className="row space-between page-navigation">
                            <Link to="/" className="nav-item back">Back to Collection</Link>
                        </div>
                        <h2 className="page-title style-2">
                            Search From Nasa
                        </h2>
                    </div>
                </div>

                {/* Search Form */}
                <div className="section section-search-form">
                    <div className="container">
                        <input className="custom-input input-block input-large"
                               id="searchForm"
                               placeholder="Type something to search..."
                               onChange={ this.search }/>
                    </div>
                </div>

                {/* Result */}
                <div className="section section-search-result">
                    <div className="container">
                        { isSearching ? <div className="spinner">Searching...</div>:
                            <ul className="row align-top image-list">
                                { searchResult.map( (value, index) => {
                                    let { date_created, title, center, description } = value.data[0];
                                    let imgUrl = value.links ? value.links[0].href:'';

                                    return (
                                        <ImageItem key={'nasa-collection-item' + index}
                                                   date_created={ date_created }
                                                   title={ title }
                                                   center={ center }
                                                   description={ description }
                                                   imgUrl={ imgUrl }
                                                   add={() => this.props.addItem(value)}
                                        />
                                    )
                                })}
                            </ul>}

                    </div>
                </div>
            </div>
        );
    }
}

export default SearchPage;