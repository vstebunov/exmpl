import React, { Component, ReactElement } from 'react';
import {Link} from 'react-router-dom';
import {Manufacturer} from './manufacturer';

interface Props {
    manufacturers: Manufacturer[];
    currentPage: number;
    children: any;
}

export class Pager extends Component<Props> {
    static defaultProps = {
        manufacturers: [],
        currentPage: 0
    };

    render() {
        const {manufacturers, children, currentPage} = this.props;
        const childrenEl = React.Children.map(children, (child) => {
            return React.cloneElement(child, {manufacturers})
        });
        const isPrevoiusDisabled = currentPage === 1 ? 'disabled' : '';
        return <div>
            {childrenEl}
            <nav>
            <ul className="pagination justify-content-center">
                <li className={['page-item', isPrevoiusDisabled].join(' ')}><Link className='page-link'to={`/page/${currentPage -1}`}>Prevoius</Link></li>
                <li className="page-item"><Link className='page-link'to={`/page/${currentPage + 1}`}>Next</Link></li>
            </ul>
            </nav>
            <div>
            <p>current page: {currentPage}</p>
            </div>
            </div>
    }
}
