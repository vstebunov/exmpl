import React from 'react';
import { Link } from 'react-router-dom';
import type { Manufacturer } from './manufacturer';

type Props = {
  manufacturers?: Manufacturer[]
};

function ListOfManufacturers(props: Props) {
  const { manufacturers } = props;
  if (!manufacturers || manufacturers.length === 0) {
    return <div>Empty</div>;
  }
  return (
    <div style={{ width: '100%' }}>
      <h1>List Of Manufacturers</h1>
      <table className="table table-sm table-striped">
        <thead>
          <tr className="text-start">
            <th>ID</th>
            <th>Common name</th>
            <th>Country</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {
                    manufacturers.map((manufacturer) => (
                      <tr key={manufacturer.Mfr_ID} className="text-start">
                        <td>{manufacturer.Mfr_ID}</td>
                        <td>{manufacturer.Mfr_CommonName}</td>
                        <td>{manufacturer.Country}</td>
                        <td><Link to={`/detail/${manufacturer.Mfr_ID}`}>Details</Link></td>
                      </tr>
                    ))
                }
        </tbody>
      </table>
    </div>
  );
}

ListOfManufacturers.defaultProps = {
  manufacturers: undefined,
};

export default ListOfManufacturers;
