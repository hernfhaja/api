import { Service, Initializer, Destructor } from 'fastify-decorators';

@Service()
export default class ApiService {
  @Initializer()
  async init(): Promise<void> {
  }

  rooms(): string {
    return  "hello"
  }

  @Destructor()
  async destroy(): Promise<void> {
  }
}
