
const commits = (state = {}, action) => {
    if (action === undefined)
        return state;
    switch(action.type) {
        case 'COMMITS_PAGE_DATA':
            return {
                ...state,
                [action.page]: {
                        page: action.page,
                        timestamp: action.timestamp,
                        commits: action.commits
                    }
                };
        default:
            return state;
    }
};


export default commits;

