import React from 'react';
import { render, screen } from '@testing-library/react';
import {Pager} from './pager';
import {ListOfManufacturers} from './listOfManufacturers';

const bigListOfMf = [{
        id: 0,
        commonName: 'Reno',
        country: 'France',
    },{
        id: 1,
        commonName: 'Reno1',
        country: 'France',
    },{
        id: 2,
        commonName: 'Reno2',
        country: 'France',
    }];

test('Pager contains pagination', () => {
    render(<Pager manufacturers={bigListOfMf} pageSize={2}><div>test</div></Pager>);
    const pageCounter = screen.getByText('pages: 2');
    const currentPage = screen.getByText('current page: 0');
    expect(currentPage).toBeInTheDocument();
    expect(pageCounter).toBeInTheDocument();
});

test('Pager contains button for pages', () => {
    render(<Pager manufacturers={bigListOfMf} pageSize={2}><div>test</div></Pager>);
    const pageCounter = screen.getByText('1');
    const currentPage = screen.getByText('2');
    expect(currentPage).toBeInTheDocument();
    expect(pageCounter).toBeInTheDocument();
});

test('Pager sliced by pages', () => {
    render(<Pager manufacturers={bigListOfMf} pageSize={2}><ListOfManufacturers /></Pager>);
    const firstEl = screen.getByText('Reno');
    const secondEl = screen.getByText('Reno1');
    expect(firstEl).toBeInTheDocument();
    expect(secondEl).toBeInTheDocument();
    expect(() => screen.getByText('Reno2')).toThrow();
});

test('Pager change pages', () => {
    render(<Pager manufacturers={bigListOfMf} pageSize={2} currentPage={1}><ListOfManufacturers /></Pager>);
    const firstEl = screen.getByText('Reno2');
    expect(firstEl).toBeInTheDocument();
    expect(() => screen.getByText('Reno')).toThrow();
    expect(() => screen.getByText('Reno1')).toThrow();
});
