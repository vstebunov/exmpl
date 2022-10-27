import { StoreData } from './types';
import { connect } from 'react-redux';
import { Pager } from '../common/pager';

const mapStateToProps = (data: StoreData) => ({
    manufacturers: data.manufacturers
})

const connectFunction = connect(mapStateToProps);
export const PagerWithStore = connectFunction(
    Pager
);
