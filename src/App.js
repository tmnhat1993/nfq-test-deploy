// Modules
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Stylesheet
import './App.scss';

// Pages
import SearchPage from './pages/search/search.page';
import CollectionPage from './pages/collection/collection.page';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        let storedCollection = localStorage.getItem('nasaCollection');
        if(storedCollection) {
            this.setState(JSON.parse(storedCollection), () => {
                console.log(this.state);
            });
        }
    }

    addItemIntoCollection = (data) => {
        // Add favorite attribute into the item in the collection
        let itemModification = {...data, favorite: false};

        // Avoid directly mutate the state
        let collection = [...this.state.list];
        collection = collection.concat(itemModification);

        this.setState({ list: collection }, () => {
            this.saveToStorage();
        });
    }

    removeItem = (index) => {
        if(index !== -1){
            // Avoid directly mutate the state
            let collection = [...this.state.list];
            collection.splice(index, 1);

            this.setState({list: collection}, () => {
                this.saveToStorage();
            })
        }
    }

    favItem = (index) => {
        if(index !== -1){
            let collection = [...this.state.list];
            collection[index].favorite = !collection[index].favorite;

            this.setState({list: collection}, () => {
                this.saveToStorage();
            })
        }
    }

    saveToStorage = () => {
        localStorage.setItem('nasaCollection', JSON.stringify(this.state));
    }

    render(){
        return (
            <div className="App">
                <Router>
                    {/* Page Routing */}
                    <Route path={'/search'}
                           render={(props) => <SearchPage {...props}
                                                          addItem={this.addItemIntoCollection}/>} />
                    <Route path={'/'} exact
                           render={(props) => <CollectionPage {...props}
                                                              collection={this.state.list}
                                                              removeItem={this.removeItem}
                                                              favItem={this.favItem}
                           />}
                    />
                </Router>

            </div>);
    }
}

export default App;
