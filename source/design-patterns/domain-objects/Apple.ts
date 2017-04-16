import {IFruit} from './IFruit';

/**
 * @description Apple domain object
 */
export class Apple implements IFruit {
	
	private name: string = 'Apple';
	
	public flower(): void {
		console.log(`I flower with ${this.name} blossom`);
	}
	
	public grow(): void {
		console.log(`I am growing as an ${this.name}`);
	}
	
	public whoami(): void {
		console.log(`I am an ${this.name}`);
	}
}
