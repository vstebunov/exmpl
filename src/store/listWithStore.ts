import { connect } from 'react-redux';
import { StoreData } from './types';
import ListOfManufacturers from '../manufacturers/listOfManufacturers';

const mapStateToProps = (data: StoreData) => ({
  manufacturers: data.manufacturers,
});

const connectFunction = connect(mapStateToProps);
const ListWithStore = connectFunction(
  ListOfManufacturers,
);

export default ListWithStore;
