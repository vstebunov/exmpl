import { StoreData } from './types';
import { connect } from 'react-redux';
import { Detail } from '../detail/detail';

const mapStateToProps = (data: StoreData) => ({
    manufacturers: data.manufacturers
})

const connectFunction = connect(mapStateToProps);
export const DetailWithStore = connectFunction(
    Detail
);
