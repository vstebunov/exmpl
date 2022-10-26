import React from 'react';
import { render, screen } from '@testing-library/react';
import {ListOfManufacturers} from './listOfManufacturers';
import type {Manufacturer} from './manufacturer';
import {BrowserRouter as Router} from 'react-router-dom';

const oneCountExample: Manufacturer[] = [{
        Mfr_ID: 0,
        Mfr_CommonName: 'Reno',
        Country: 'France',
}];

/*
test('List of manufacturers have header', () => {
    render(<ListOfManufacturers />);
    const listOfManufacturers = screen.getByText(/List of Manufacturers/i);
    expect(listOfManufacturers).toBeInTheDocument();
});
*/

test('List of manufacturers have ID', () => {
    render(<Router><ListOfManufacturers manufacturers={oneCountExample} /></Router>);
    const idColumn = screen.getByText(/ID/i);
    expect(idColumn).toBeInTheDocument();
});

test('List of manufacturers have common name', () => {
    render(<Router><ListOfManufacturers manufacturers={oneCountExample}  /></Router>);
    const nameColumn = screen.getByText(/common name/i);
    expect(nameColumn).toBeInTheDocument();
});

test('List of manufacturers have country', () => {
    render(<Router><ListOfManufacturers manufacturers={oneCountExample} /></Router>);
    const countryColumn = screen.getByText(/country/i);
    expect(countryColumn).toBeInTheDocument();
});

/*
test('List of manufacturers have detail', () => {
    render(<ListOfManufacturers manufacturers={oneCountExample} />);
    const detailColumn = screen.getByText(/detail/i);
    expect(detailColumn).toBeInTheDocument();
});
*/

/*
test('List of manufacturers show loading', () => {
    render(<Router><ListOfManufacturers loading={true}/></Router>);
    const idColumn = screen.getByText(/Loading.../i);
    expect(idColumn).toBeInTheDocument();
});
*/

test('List of manufacturers show simple result', () => {
    const result = [{
        Mfr_ID: 0,
        Mfr_CommonName: 'Reno',
        Country: 'France',
    }];
    render(<Router><ListOfManufacturers manufacturers={result}/></Router>);
    const idColumn = screen.getByText(/0/i);
    const commonNameColumn = screen.getByText(/Reno/i);
    const countryColumn = screen.getByText(/France/i);
    expect(idColumn).toBeInTheDocument();
    expect(commonNameColumn).toBeInTheDocument();
    expect(countryColumn).toBeInTheDocument();
});
