/**
 * VegetableFacadeDemo created on 4/15/17 3:56 PM.
 *
 * @description [To be completed]
 */

import {IDemo} from '../IDemo';
import {
	IVegetableFacade,
	VegetableFacade
} from './VegetableFacade';

class VegetableFacadeDemo implements IDemo {
	
	private vegetableFacade: IVegetableFacade = new VegetableFacade();
	
	public run(): void {
		this.vegetableFacade.growVegetables();
	}
}

const facadeDemo = new VegetableFacadeDemo();
facadeDemo.run();
