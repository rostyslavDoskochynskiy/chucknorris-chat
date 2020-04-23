import { Http } from '@app/services/http';

export class ApiService {
  get = path => Http.get(path);

  post = (path, data) => Http.post(path, data);

  patch = (path, data) => Http.patch(path, data);

  put = (path, data) => Http.put(path, data);

  delete = (path, data) => Http.delete(path, data);
}
