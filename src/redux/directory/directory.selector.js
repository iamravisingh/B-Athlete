import { createSelector } from 'reselect';

const selectDirectory = (state) => state.directory;

export const selectDirectoryitems = createSelector(
    [selectDirectory],
    directory => directory.sections
)