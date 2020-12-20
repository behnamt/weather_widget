import React from 'react';
import './Error.scss';

interface IErrorProps {
  error: Error;
}

const Error: React.FC<IErrorProps> = (props: IErrorProps) => {
  const { error } = props;
  return <div className="error">Error</div>;
};

export default Error;
