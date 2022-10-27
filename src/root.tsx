import React, {Component} from 'react';
import {ListOfManufacturers} from './listOfManufacturers';
import {PagerWithStore} from './pagerWithStore';
import {Loader} from './loader';
import {
    useParams
} from 'react-router-dom';
import {dataStore} from './store';
import axios from 'axios';
import {refreshManufacturers} from './actionCreators';

export class Root extends Component<{currentPage: string}, {isLoading: boolean}> {
    constructor (props: any) {
        super(props);
        this.state = {
            isLoading: false
        };
    }

    componentDidMount = () => {
        const {currentPage} = this.props; 
        const filteredCurrentPage = currentPage ? Number.parseInt(currentPage) : 0;
        this.downloadManufacturers(filteredCurrentPage);
    }

    componentDidUpdate = (prevProps: any) => {
        const {currentPage} = this.props; 
        const filteredCurrentPage = currentPage ? Number.parseInt(currentPage) : 0;
        console.log(this.props, this.state);
        if (this.state.isLoading === false && prevProps.currentPage !== this.props.currentPage) {
            this.downloadManufacturers(filteredCurrentPage);
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
        }, error => {
            this.setState({isLoading: false});
        });
    }

    render = () => {
        const {currentPage} = this.props;
        const filteredCurrentPage = currentPage ? Number.parseInt(currentPage) : 0;

        return (
        <div className="App">
            <p>TODO: review it</p>
            <Loader isLoading={this.state.isLoading}>
                <PagerWithStore currentPage={filteredCurrentPage}>
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
