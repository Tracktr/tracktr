import { Movies as _Movies } from './movies';

export namespace PrismaModel {
  export class Movies extends _Movies {}

  export const extraModels = [Movies];
}
