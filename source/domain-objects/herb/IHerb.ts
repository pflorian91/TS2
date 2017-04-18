import {IFood} from '../IFood';

/**
 * @description Herb interface
 */
export interface IHerb extends IFood {
	makeSeeds(): boolean;
}
