import React, { ReactNode } from 'react';
import logo from './logo.svg';

type Props = {
  isLoading: boolean;
  children?: ReactNode;
};

function Loader(props: Props) {
  const { children, isLoading } = props;
  if (isLoading) {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div>
      {children}
    </div>
  );
}

Loader.defaultProps = {
  children: undefined,
};

export default Loader;
