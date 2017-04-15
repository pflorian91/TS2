import {IFruit} from './IFruit';

/**
 * @description Banana domain object
 */
export class Banana implements IFruit {
	
	public flower(): void {
		console.log('I flower with banana flower spike');
	}
}
