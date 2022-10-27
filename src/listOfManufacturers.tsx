import type {Manufacturer} from './manufacturer';
import {Link} from 'react-router-dom';

export const ListOfManufacturers = (props: {manufacturers?: Manufacturer[]}) => {
        const {manufacturers} = props;
        if (!manufacturers || manufacturers.length === 0) {
            return <div>Empty</div>
        }
        return <div style={{width:'100%'}}>
            <h1>List Of Manufacturers</h1>
            <table className='table table-sm table-striped'>
                <thead>                
                    <tr>
                        <th>ID</th>
                        <th>Common name</th>
                        <th>Country</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                {
                    manufacturers.map(manufacturer => {
                        return <tr key={manufacturer.Mfr_ID}>
                            <td>{manufacturer.Mfr_ID}</td>
                            <td>{manufacturer.Mfr_CommonName}</td>
                            <td>{manufacturer.Country}</td>
                            <td><Link to={`/detail/${manufacturer.Mfr_ID}`}>Details</Link></td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
}
