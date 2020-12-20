import React from 'react';

interface IErrorProps {
  error: Error;
}

const Error: React.FC<IErrorProps> = (props: IErrorProps) => {
  const { error } = props;
  return (
    <div className="error">
      <h1 className="error__headline">Technical difficalities!</h1>
      <span className="error__subtitle">please try later</span>
    </div>
  );
};

export default Error;
