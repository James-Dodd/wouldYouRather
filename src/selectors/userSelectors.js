import { createSelector } from 'reselect'

export const getUsers = createSelector(
    (state) => state.users
)