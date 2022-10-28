import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  currentPage: number;
  children?: ReactNode
};

function Pager(props:Props) {
  const { children, currentPage } = props;
  const isPrevoiusDisabled = currentPage === 1 ? 'disabled' : '';
  return (
    <div>
      <nav>
        <ul className="pagination justify-content-center">
          <li className={['page-item', isPrevoiusDisabled].join(' ')}><Link className="page-link" to={`/page/${currentPage - 1}`}>Previous</Link></li>
          <li className="page-item"><Link className="page-link" to={`/page/${currentPage + 1}`}>Next</Link></li>
        </ul>
      </nav>
      {children}
      <nav>
        <ul className="pagination justify-content-center">
          <li className={['page-item', isPrevoiusDisabled].join(' ')}><Link className="page-link" to={`/page/${currentPage - 1}`}>Previous</Link></li>
          <li className="page-item"><Link className="page-link" to={`/page/${currentPage + 1}`}>Next</Link></li>
        </ul>
      </nav>
      <div>
        <p>
          current page:
          {currentPage}
        </p>
      </div>
    </div>
  );
}

Pager.defaultProps = {
  children: undefined,
};

export default Pager;
