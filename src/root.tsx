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
        <p>TODO: check update state</p>
        <p>TODO: review it</p>
        <p>TODO: loading next page last page</p>
        <Pager manufacturers={manufacturers} pageSize={10} currentPage={filteredCurrentPage}>
            <ListOfManufacturers />
        </Pager>

        </header>
        </div>
    );
}
