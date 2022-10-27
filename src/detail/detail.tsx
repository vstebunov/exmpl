import {Manufacturer} from '../manufacturers/manufacturer';
import {
    useParams,
    useNavigate
} from 'react-router-dom';

type PageParams = {
    id?: string;
};

type DetailProps = {
    manufacturers?: Manufacturer[]
};

export const Detail = (props: DetailProps) => {
    const {id} = useParams<PageParams>();
    const navigate = useNavigate();
    const {manufacturers} = props;
    if (!manufacturers) {
        return <div>Not loaded</div>
    }
    const filteredID = id ? Number.parseInt(id) : 0;
    const result = manufacturers.find(manufacturer => manufacturer.Mfr_ID === filteredID);
    if (!result) {
        return <div>Empty</div>
    }
    return (
        <div className="App">
            <h1>Detail:{result.Mfr_CommonName}</h1>
            <p>Name: {result.Mfr_CommonName}</p>
            <p>ID: {result.Mfr_ID}</p>
            <p>Country: {result.Country}</p>
            {(result.VehicleTypes && result.VehicleTypes.length > 0) ?
                <table className='table table-sm table-striped table-bordered'>
                    <thead>
                        <tr>
                           <th className='text-start' scope='col'>IsPrime</th>
                           <th className='text-start' scope='col'>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {result.VehicleTypes.map(vehicleType => (
                        <tr key={`vc${vehicleType.Name}`}>
                            <td key={`isPrimary${vehicleType.Name}`} className='text-start' >{vehicleType.IsPrimary === true ? 'Primary' : 'Not'}</td>
                            <td key={`Name${vehicleType.Name}`} className='text-start' >{vehicleType.Name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                : ''
            }
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}