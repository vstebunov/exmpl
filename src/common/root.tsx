import React, { Component } from 'react';
import {
  useParams,
} from 'react-router-dom';
import axios from 'axios';
import ListOfManufacturers from '../store/listWithStore';
import Pager from './pager';
import Loader from './loader';
import dataStore from '../store/store';
import refreshManufacturers from '../store/actionCreators';

type Props = {
  currentPage: string
};

type State = {
  isLoading: boolean
};

class Root extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    this.downloadManufacturers(this.getCurrentPage());
  }

  componentDidUpdate(prev: Props) {
    const { currentPage } = this.props;
    const { isLoading } = this.state;
    if (isLoading === false && prev.currentPage !== currentPage) {
      this.downloadManufacturers(this.getCurrentPage());
    }
  }

  getCurrentPage = (): number => {
    const { currentPage } = this.props;
    const filteredCurrentPage = currentPage ? Number.parseInt(currentPage, 10) : 1;
    return filteredCurrentPage;
  };

  downloadManufacturers = (page: number) => {
    this.setState({ isLoading: true });
    axios.get('/getallmanufacturers', {
      baseURL: 'https://vpic.nhtsa.dot.gov/api/vehicles',
      params: {
        format: 'json',
        page,
      },
    }).then((response) => {
      dataStore.dispatch(refreshManufacturers(...response.data.Results));
      this.setState({ isLoading: false });
    }, () => {
      this.setState({ isLoading: false });
    });
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div className="App">
        <Loader isLoading={isLoading}>
          <Pager currentPage={this.getCurrentPage()}>
            <ListOfManufacturers />
          </Pager>
        </Loader>
      </div>
    );
  }
}

function withParams(ComponentWithParams: typeof Root): any {
  return function () {
    return <ComponentWithParams currentPage={useParams().currentPage ?? ''} />;
  };
}

export default withParams(Root);
