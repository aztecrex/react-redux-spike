import { combineReducers } from 'redux'
import commits from './commits';

const app = combineReducers({
    commits
});

export default app;

