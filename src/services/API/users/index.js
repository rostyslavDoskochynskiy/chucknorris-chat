import UsersAPIService from "./usersAPIService";

const usersAPIService = new UsersAPIService();

export const users = {
  ...usersAPIService,
};
