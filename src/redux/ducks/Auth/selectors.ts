import {RootState} from '../../store';

export const selectToken = (state: RootState) => state.auth.token;
export const selectUsername = (state: RootState) => state.auth.name;
