import React from 'react';

const CommitElement = ({commit}) => {
    return (
        <div className="commit-row">
          <div>{commit.id}</div>
          <div>{commit.description}</div>
        </div>
    );
};

const CommitView = ({commits}) => {
    return (
        <div>
            {(commits || []).map(c => <CommitElement commit={c} key={c.id}/>)}
        </div>
    );
};

export default CommitView;

