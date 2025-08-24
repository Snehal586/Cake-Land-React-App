import { createSelector} from 'reselect';


const selectDiretory = state => state.directory;

export const selectDirectorySections = createSelector(
    [selectDiretory],
    directory => directory.sections
);