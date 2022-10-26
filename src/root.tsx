import React, {Component, useState} from 'react';
import {ListOfManufacturers} from './listOfManufacturers';
import {Manufacturer} from './manufacturer';
import {Pager} from './pager';
import {Loader} from './loader';
import {
    useParams
} from 'react-router-dom';

type PageParams = {
    currentPage?: string;
};

type RootProps = {
    manufacturers?: Manufacturer[]
};

export const Root = (props: RootProps) => {
    const {manufacturers} = props;
    const {currentPage} = useParams<PageParams>();
    const filteredCurrentPage = currentPage ? Number.parseInt(currentPage) - 1 : 0;
    return (
        <div className="App">
        <header className="App-header">
        <p> A web application with a list of vehicle manufacturers which I can click on to see them in detail.</p>
        <p> The whole application is utilizing publicly accessible data https://vpic.nhtsa.dot.gov/api/. </p>
        <p>The list of manufacturers is a paginated table with these columns: ID, common name and country. Besides that, there's an additional column with a button which leads to the detail page. </p> 
        <p>TODO: add linter and husky</p>
        <Pager manufacturers={manufacturers} pageSize={10} currentPage={filteredCurrentPage}>
            <ListOfManufacturers />
        </Pager>

        </header>
        </div>
    );
}
