import {IDemo} from '../../IDemo';
import {
	FoodMaker,
	IFoodMaker
} from './FoodMaker';
import {IFoodBuilder} from './IFoodBuilder';
import {AppleBuilder} from './AppleBuilder';
import {IFood} from '../../../domain-objects/IFood';
import {MushroomBuilder} from './MushroomBuilder';

/**
 * @description Food builder demo implementation
 */
class FoodBuilderDemo implements IDemo {
	
	private foodMaker: IFoodMaker;
	
	public run(): void {
		this.foodMaker = new FoodMaker();
		
		const appleBuilder: IFoodBuilder = new AppleBuilder();
		const mushroomBuilder: IFoodBuilder = new MushroomBuilder();
		
		this.foodMaker.setFoodBuilder(appleBuilder);
		this.foodMaker.createNewFood();
		const apple: IFood = this.foodMaker.getFood();
		
		this.foodMaker.setFoodBuilder(mushroomBuilder);
		this.foodMaker.createNewFood();
		const mushroom: IFood = this.foodMaker.getFood();
	}
}

const builderDemo = new FoodBuilderDemo();
builderDemo.run();
