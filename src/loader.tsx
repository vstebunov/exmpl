import React, { Component, ReactElement } from 'react';
import logo from './logo.svg';
import {Manufacturer} from './manufacturer';
import axios from 'axios';

interface State {
    manufacturers: Manufacturer[];
    isLoading: boolean;
};

interface Props {
    children: any;
}

export class Loader extends Component<Props, State> {

    constructor (props: any) {
        super(props);
        this.state = {
            manufacturers: [],
            isLoading: true
        };
        axios.get('/getallmanufacturers?format=json', {
            baseURL: 'https://vpic.nhtsa.dot.gov/api/vehicles'
        }).then( response => {
            this.setState({isLoading: false});
            const manufacturers = this.state.manufacturers;
            manufacturers.push(...response.data.Results)
            this.setState({manufacturers: manufacturers});
        });
    }

    static defaultProps = {
        isLoading: true
    };

    render() {
        const {children} = this.props;
        const {manufacturers, isLoading} = this.state;
        const childrenEl = React.Children.map(children, (child) => {
            return React.cloneElement(child, {manufacturers})
        });
        let page = 1;
        const nextPage = () => {
            axios.get(`/getallmanufacturers?format=json&page=${page}`, {
                baseURL: 'https://vpic.nhtsa.dot.gov/api/vehicles'
            }).then( response => {
                this.setState({isLoading: false});
                const manufacturers = this.state.manufacturers;
                manufacturers.push(...response.data.Results)
                this.setState({manufacturers: manufacturers});
                page = page + 1;
            });
        };
        if (isLoading) {
            return <div>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Loading...</p>
            </div>
        }
        return <div>
                {childrenEl}
                <button onClick={nextPage}>nextPage</button>
            </div>
    }
}
