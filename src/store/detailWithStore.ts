import { connect } from 'react-redux';
import { StoreData } from './types';
import Detail from '../detail/detail';

const mapStateToProps = (data: StoreData) => ({
  manufacturers: data.manufacturers,
});

const connectFunction = connect(mapStateToProps);
const DetailWithStore = connectFunction(
  Detail,
);

export default DetailWithStore;
