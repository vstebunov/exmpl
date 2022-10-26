import React, {Component, useState} from 'react';
import {ListOfManufacturers} from './listOfManufacturers';
import {Manufacturer} from './manufacturer';
import {Pager} from './pager';
import {Loader} from './loader';
import {
    useParams,
    useLoaderData
} from 'react-router-dom';

type PageParams = {
    id?: string;
};

export const Detail = () => {
    const {id} = useParams<PageParams>();
    const filteredID = id ? Number.parseInt(id) : 0;
    const cn = useLoaderData();
    return (
        <div className="App">
            <h1>Details:{filteredID}</h1>
        </div>
    );
}
