import {IFood} from '../IFood';

/**
 * @description Spice interface
 */
export interface ISpice extends IFood {
	needsDryout(): boolean;
	usedForColor(): boolean;
	usedForFlavour(): boolean;
}
