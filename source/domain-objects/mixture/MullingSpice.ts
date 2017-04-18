import {IMixture} from './IMixture';

/**
 * @description MullingSpice domain object
 */
export class MullingSpice implements IMixture {
	
	private name: string = 'MullingSpice';
	
	public combineIngredients(): void {
		console.log(`${this.name} is a combination of cinnamon, cloves, allspice, and nutmeg.`);
	}
	
	public grow(): void {
		console.log(`I am not growing. I am made up.`);
	}
	
	public whoami(): void {
		console.log(`I am a ${this.name}`);
	}
}
