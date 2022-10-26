import React from 'react';
import logo from './logo.svg';
import {ListOfManufacturers} from './listOfManufacturers';
import './App.css';
import {Manufacturer} from './manufacturer';
import {Pager} from './pager';

function App() {
    const test:Manufacturer[] = [{
        id: 100,
        commonName:'Test',
        country: 'France'
    }, {
        id: 103,
        commonName:'Test6',
        country: 'France'
    },{
        id: 101,
        commonName:'Test7',
        country: 'France'
    },{
        id: 102,
        commonName:'Test1',
        country: 'France'
    }];
  return (
    <div className="App">
      <header className="App-header">
        <p> A web application with a list of vehicle manufacturers which I can click on to see them in detail.</p>
        <p> The whole application is utilizing publicly accessible data https://vpic.nhtsa.dot.gov/api/. </p>
        <p>The list of manufacturers is a paginated table with these columns: ID, common name and country. Besides that, there's an additional column with a button which leads to the detail page. </p> 
        <p>TODO: add linter and husky</p>
        <Pager pageSize={2} currentPage={1} manufacturers={test}>
            <ListOfManufacturers />
        </Pager>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
