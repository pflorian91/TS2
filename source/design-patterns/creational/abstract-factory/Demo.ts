import {
	FoodAbstractFactory,
	IFoodAbstractFactory
} from './FoodAbstractFactory';
import {IDemo} from '../../IDemo';
import {IFruit} from '../../domain-objects/IFruit';
import {IVegetable} from '../../domain-objects/IVegetable';

/**
 * @description Food AbstractFactory demo implementation
 */
class FoodAbstractFactoryDemo implements IDemo {
	
	private foodAbstractFactory: IFoodAbstractFactory = new FoodAbstractFactory();
	
	public run(): void {
		const apple: IFruit = this.foodAbstractFactory.makeFruit();
		const cherry: IFruit = this.foodAbstractFactory.makeFruit(true);
		const carrot: IVegetable = this.foodAbstractFactory.makeVegetable();
		
		apple.flower();
		cherry.flower();
		carrot.grow();
	}
}

const abstractFactoryDemo = new FoodAbstractFactoryDemo();
abstractFactoryDemo.run();
