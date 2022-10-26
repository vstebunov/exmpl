import type {Manufacturer} from './manufacturer';
import logo from './logo.svg';

export const ListOfManufacturers = (props: {loading?: boolean, manufacturers?: Manufacturer[]}) => {
        const {loading, manufacturers} = props;
        if (loading) {
            return <div>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Loading...</p>
            </div>
        }
        if (!manufacturers || manufacturers.length === 0) {
            return <div>Empty</div>
        }
        return <div style={{width:'100%'}}>
            <h1>List Of Manufacturers</h1>
            <table>
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
                        return <tr key={manufacturer.id}>
                            <td>{manufacturer.id}</td>
                            <td>{manufacturer.commonName}</td>
                            <td>{manufacturer.country}</td>
                            <td><button>Details</button></td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
}
