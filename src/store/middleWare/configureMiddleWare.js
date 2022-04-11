import thunk from 'redux-thunk';
import consoleLogger from './consoleLogger';
import { applyMiddleware } from 'redux';

export default applyMiddleware(thunk, consoleLogger);