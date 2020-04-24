import { ApiService } from "@app/services/apiService";
import { Endpoints } from "../index";

export default class UsersAPIService extends ApiService {
  getUsers = () => this.get(Endpoints.FETCH_USERS());
}
