import {IFruit} from './IFruit';

/**
 * @description Cherry domain object
 */
export class Cherry implements IFruit {
	
	public flower(): void {
		console.log('I flower with cherry blossom');
	}
}
