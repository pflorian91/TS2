import {IFood} from '../IFood';

/**
 * @description Mixture interface
 */
export interface IMixture extends IFood {
	combineIngredients(): void;
}
