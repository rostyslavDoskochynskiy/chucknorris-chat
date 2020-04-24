import { ApiService } from '@app/services/apiService';
import { Endpoints } from '../index';

export default class MessagesAPIService extends ApiService {
  getMessage = () => this.get(Endpoints.FETCH_MESSAGE());
}
