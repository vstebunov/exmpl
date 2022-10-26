import React from 'react';
import { render, screen } from '@testing-library/react';
import {Pager} from './pager';
import {ListOfManufacturers} from './listOfManufacturers';
import {BrowserRouter as Router} from 'react-router-dom';

const bigListOfMf = [{
        Mfr_ID: 0,
        Mfr_CommonName: 'Reno',
        Country: 'France',
    },{
        Mfr_ID: 1,
        Mfr_CommonName: 'Reno1',
        Country: 'France',
    },{
        Mfr_ID: 2,
        Mfr_CommonName: 'Reno2',
        Country: 'France',
    }];

test('Pager contains pagination', () => {
    render(<Router><Pager manufacturers={bigListOfMf} pageSize={2}><div>test</div></Pager></Router>);
    const pageCounter = screen.getByText('pages: 2');
    const currentPage = screen.getByText('current page: 0');
    expect(currentPage).toBeInTheDocument();
    expect(pageCounter).toBeInTheDocument();
});

test('Pager contains button for pages', () => {
    render(<Router><Pager manufacturers={bigListOfMf} pageSize={2}><div>test</div></Pager></Router>);
    const pageCounter = screen.getByText('1');
    const currentPage = screen.getByText('2');
    expect(currentPage).toBeInTheDocument();
    expect(pageCounter).toBeInTheDocument();
});

test('Pager sliced by pages', () => {
    render(<Router><Pager manufacturers={bigListOfMf} pageSize={2}><ListOfManufacturers /></Pager></Router>);
    const firstEl = screen.getByText('Reno');
    const secondEl = screen.getByText('Reno1');
    expect(firstEl).toBeInTheDocument();
    expect(secondEl).toBeInTheDocument();
    expect(() => screen.getByText('Reno2')).toThrow();
});

test('Pager change pages', () => {
    render(<Router><Pager manufacturers={bigListOfMf} pageSize={2} currentPage={1}><ListOfManufacturers /></Pager></Router>);
    const firstEl = screen.getByText('Reno2');
    expect(firstEl).toBeInTheDocument();
    expect(() => screen.getByText('Reno')).toThrow();
    expect(() => screen.getByText('Reno1')).toThrow();
});
