import {IDemo} from '../IDemo';
import {
	IVegetableFacade,
	VegetableFacade
} from './VegetableFacade';

/**
 * @description Vegetable Facade demo implementation
 */
class VegetableFacadeDemo implements IDemo {
	
	private vegetableFacade: IVegetableFacade = new VegetableFacade();
	
	public run(): void {
		this.vegetableFacade.growVegetables();
	}
}

const facadeDemo = new VegetableFacadeDemo();
facadeDemo.run();
