import { createSelector } from "reselect";

// ====================================== Users ======================================

export const usersSelector = createSelector(
  ({ users }) => users,
  ({ fetching }) => ({ fetching })
);
