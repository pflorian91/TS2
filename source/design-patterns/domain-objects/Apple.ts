import {IFruit} from './IFruit';

/**
 * @description Apple domain object
 */
export class Apple implements IFruit {
	
	public flower(): void {
		console.log('I flower with apple blossom');
	}
}
