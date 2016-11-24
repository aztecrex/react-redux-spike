import commits from './commits';

it ('defaults to empty state', () => {
    expect(commits()).toEqual({});
});

it ('ignores unknown action', () => {
    const originalState = {foo:2};
    const unknownAction = {type: 'UNKNOWN'};
    expect(commits(originalState,unknownAction)).toEqual(originalState);
});

it('adds a page', () => {
    const originalState = {
        foo: 'bar'
    };
    const action = {
        type: 'COMMITS_PAGE_DATA',
        page: 3,
        timestamp:  new Date(10000),
        commits: [{foo:2},{bar:3}]
    };

    const expected = {
        foo: 'bar',
        [action.page]: {
            page: action.page,
            timestamp: action.timestamp,
            commits: action.commits
        }
    };

    expect(commits(originalState, action)).toEqual(expected);

});

it ('replaces a page', () => {
    const originalState = {
        foo: 'bar',
        3: {
            page: 3,
            timestamp: new Date(100),
            commits: [],
            other: 'whatever'
        }
    };
    const action = {
        type: 'COMMITS_PAGE_DATA',
        page: 3,
        timestamp:  new Date(10000),
        commits: [{foo:2},{bar:3}]
    };

    const expected = {
        foo: 'bar',
        [action.page]: {
            page: action.page,
            timestamp: action.timestamp,
            commits: action.commits
        }
    };

    expect(commits(originalState, action)).toEqual(expected);

});

