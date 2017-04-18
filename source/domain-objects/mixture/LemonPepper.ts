import {IMixture} from './IMixture';

/**
 * @description LemonPepper domain object
 */
export class LemonPepper implements IMixture {

	private name: string = 'LemonPepper';
	
	public combineIngredients(): void {
		console.log(`${this.name} is a combination of lemon zest and cracked black peppercorns.`);
	}
	
	public grow(): void {
		console.log(`I am not growing. I am made up.`);
	}
	
	public whoami(): void {
		console.log(`I am a ${this.name}`);
	}
}
