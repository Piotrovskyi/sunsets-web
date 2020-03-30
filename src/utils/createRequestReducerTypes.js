import { FAILED, REQUEST, SUCCESS } from '../constants/saga.constants';
import getStringWithPrefix from './getStringWithPrefix';

const createRequestReducerTypes = (prefix) => ({
  [REQUEST]: getStringWithPrefix(prefix, REQUEST),
  [FAILED]: getStringWithPrefix(prefix, FAILED),
  [SUCCESS]: getStringWithPrefix(prefix, FAILED),
});

export default createRequestReducerTypes;
