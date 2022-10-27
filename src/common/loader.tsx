import React from 'react';
import logo from './logo.svg';

interface Props {
    isLoading: boolean;
    children: any;
}

export function Loader (props: Props) {
    const {children, isLoading} = props;
    const childrenEl = React.Children.map(children, (child) => {
        return React.cloneElement(child)
    });
    if (isLoading) {
        return <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Loading...</p>
        </div>
    }
    return <div>
        {childrenEl}
    </div>
}
