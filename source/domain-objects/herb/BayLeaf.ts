import {IHerb} from './IHerb';

/**
 * @description BayLeaf domain object
 */
export class BayLeaf implements IHerb {
	
	private name: string = 'BayLeaf';
	
	public makeSeeds(): boolean {
		return true;
	}
	
	public grow(): void {
		console.log(`I am growing as a ${this.name}`);
	}
	
	public whoami(): void {
		console.log(`I am a ${this.name} herb`);
	}
}
