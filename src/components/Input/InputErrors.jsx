import React from 'react';
import _ from 'lodash';
import { Layout } from '../../layout';

const InputErrors = ({ error }) => {
  if (!error || _.isEmpty(error)) return null;

  return (
    <Layout>
      {/* use role="alert" to announce the error message */}
      {error.type === 'required' && (
        <span className="red" role="alert">This is required</span>
      )}
      {error.type === 'maxLength' && (
        <span className="red" role="alert">Max length exceeded</span>
      )}
      {/* TODO: Handle other cases, & refactor to switch/case */}
    </Layout>
  );
};

export default React.memo(InputErrors);
