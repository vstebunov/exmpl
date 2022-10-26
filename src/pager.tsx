import React, { Component, ReactElement } from 'react';
import {Manufacturer} from './manufacturer';

interface Props {
    manufacturers: Manufacturer[];
    pageSize: number;
    currentPage: number;
    children: any;
}

export class Pager extends Component<Props> {

    static defaultProps = {
        manufacturers: [],
        pageSize: 100,
        currentPage: 0
    };

    render() {
        const {manufacturers, pageSize, children, currentPage} = this.props;
        const pageOfManufacturers = manufacturers.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
        const pages = Math.round(manufacturers.length / pageSize);
        const childrenEl = React.Children.map(children, (child) => {
            return React.cloneElement(child, {manufacturers: pageOfManufacturers})
        });
        const pageButtons = [];
        for (let i=1; i< pages + 1; i++) {
            pageButtons.push(<button key={i}>{i}</button>);
        }
        return <div>
                {childrenEl}
                {pageButtons}
                <div>
                    <p>current page: 0</p>
                    <p>pages: {pages}</p>
                </div>
            </div>
    }
}
