import {IFruit} from './IFruit';

/**
 * @description Cherry domain object
 */
export class Cherry implements IFruit {
	
	private name: string = 'Cherry';
	
	public flower(): void {
		console.log(`I flower with ${this.name} blossom`);
	}
	
	public grow(): void {
		console.log(`I am growing as a ${this.name}`);
	}
	
	public whoami(): void {
		console.log(`I am a ${this.name}`);
	}
}
