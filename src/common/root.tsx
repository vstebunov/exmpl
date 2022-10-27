import {Component} from 'react';
import {ListOfManufacturers} from '../manufacturers/listOfManufacturers';
import {PagerWithStore} from '../store/pagerWithStore';
import {Loader} from '../common/loader';
import {
    useParams
} from 'react-router-dom';
import {dataStore} from '../store/store';
import axios from 'axios';
import {refreshManufacturers} from '../store/actionCreators';

export class Root extends Component<{currentPage: string}, {isLoading: boolean}> {
    constructor (props: any) {
        super(props);
        this.state = {
            isLoading: false
        };
    }

    getCurrentPage = (): number => {
        const {currentPage} = this.props; 
        const filteredCurrentPage = currentPage ? Number.parseInt(currentPage) : 1;
        return filteredCurrentPage;
    }

    componentDidMount = () => {
        this.downloadManufacturers(this.getCurrentPage());
    }

    componentDidUpdate = (prevProps: any) => {
        if (this.state.isLoading === false && prevProps.currentPage !== this.props.currentPage) {
            this.downloadManufacturers(this.getCurrentPage());
        }
    }

    downloadManufacturers = (page: number) => {
        this.setState({isLoading: true});
        axios.get('/getallmanufacturers', {
            baseURL: 'https://vpic.nhtsa.dot.gov/api/vehicles',
            params: {
                format: 'json',
                page
            }
        }).then( response => {
            dataStore.dispatch(refreshManufacturers(...response.data.Results));
            this.setState({isLoading: false});
        }, () => {
            this.setState({isLoading: false});
        });
    }

    render = () => {
        return (
        <div className="App">
            <Loader isLoading={this.state.isLoading}>
                <PagerWithStore currentPage={this.getCurrentPage()}>
                    <ListOfManufacturers />
                </PagerWithStore>
            </Loader>
        </div>
        );
    }
}

function withParams(Component: any): any {
  return (props: any) => <Component {...props} currentPage={useParams().currentPage} />;
}

export default withParams(Root);
