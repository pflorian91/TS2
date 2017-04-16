import {IFruit} from './IFruit';

/**
 * @description Banana domain object
 */
export class Banana implements IFruit {
	
	private name: string = 'Banana';
	
	public flower(): void {
		console.log(`I flower with ${this.name} flower spike`);
	}
	
	public grow(): void {
		console.log(`I am growing as a ${this.name}`);
	}
	
	public whoami(): void {
		console.log(`I am a ${this.name}`);
	}
}
