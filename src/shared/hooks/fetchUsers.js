import { useEffect } from 'react';
import { usersError } from '@app/store/actions/users/users';
import { delay } from '@app/shared/utils';

/** @description
 * I transferred this effect from the container's component
 *  so that it can be used anywhere in the application
 * **/

export const useFetchUsers = ({
  fetchUsers,
  notification,
  dispatch,
  setJson,
}) => {
  useEffect(() => {
    (async () => {
      try {
        const res = await Promise.race([dispatch(fetchUsers()), delay(5000)]);
        setJson(res);
        if (res) {
          dispatch(
            notification({
              kind: 'success',
              title: 'Success!',
              message: 'Users are successfully loaded',
            })
          );
        } else {
          dispatch(usersError({}));
          dispatch(
            notification({
              title: 'Info',
              message:
                'jsonplaceholder.typicode.com - took too long to respond. Try later',
            })
          );
        }
      } catch ({ message }) {
        dispatch(
          notification({
            message,
            kind: 'error',
            title: 'Error!',
          })
        );
      }
    })();
  }, [fetchUsers, notification, dispatch, setJson]);
};
