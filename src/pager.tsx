import React, { Component, ReactElement } from 'react';
import {Link} from 'react-router-dom';
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
            pageButtons.push(<li className="page-item" key={'link_' + i} ><Link className='page-link'to={`/page/${i}`}>{i}</Link></li>);
        }
        return <div>
                {childrenEl}
                <nav>
                    <ul className="pagination pagination-sm">
                        {pageButtons}
                    </ul>
                </nav>
                <div>
                    <p>current page: {currentPage + 1}</p>
                    <p>pages: {pages}</p>
                </div>
            </div>
    }
}
