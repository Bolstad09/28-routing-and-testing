import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Header from './header/header.js';
import Footer from './footer/footer.js';
import Home from './home/home.js';
import Items from './items/items.js';
import Item from './item/item.js';
import '../style/app.scss';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items:{},
    };

    this.addItem = this.addItem.bind(this);

  }

  addItem(data) {
    let item = {};
    item[data.id] = data.text;
    this.setState( Object.assign(this.state.items,item) );
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  //new stuff


  render(){
    return()
      <BrowserRouter>
      <Route path="/" component={() => <p> home away from home </p>} />
      <Route path="/blah" component={<Blah message="blah blah blah" />} />
      </BrowserRouter>
    )

  }


  xrender() {
    return (
      <BrowserRouter>
      <React.Fragment>
    <Header />
    <nav>
      <ul>
        <li>
          <link to="/items">Items</link>
          </li>
          </ul>
          </nav>
          {/* new ^^ */}
        
          <Header title="Our Basic App" />
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/items"
              component={() =>
                <Items
                  handleAdd={this.addItem}
                  items={this.state.items}
                />
              }
            />
            <Route path="/item/:id"
              component={(props) => {
                let name = 'templeton';
                 return<Item
                 name={name} 
                //  {...props}
                //   items={this.state.items} <-- dont need this crap
                />
                //8:17

              }
              }
            />
          </main>
          <Footer footerText="You hit rock bottom" />
        </React.Fragment>
      </BrowserRouter>
    );
  }

}

class Blah extends React.Component {

  render()(
    return <p>blah {this.props.message}</p>
  )
}