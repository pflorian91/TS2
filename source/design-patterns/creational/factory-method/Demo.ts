import {SpiceFactoryMethod} from './SpiceFactoryMethod';
import {IDemo} from '../../IDemo';
import {ISpice} from '../../../domain-objects/spice/ISpice';
import {SpiceType} from '../../../domain-objects/spice/SpiceType';

/**
 * @description Spice factory method demo implementation
 */
class SpiceFactoryMethodDemo implements IDemo {
	
	private spiceFactory: SpiceFactoryMethod;
	
	public run(): void {
		this.spiceFactory = new SpiceFactoryMethod();
		
		const cinnamon: ISpice = this.spiceFactory.getSpice(SpiceType.Cinnamon);
		const ginger: ISpice = this.spiceFactory.getSpice(SpiceType.Ginger);
		const paprika: ISpice = this.spiceFactory.getSpice(SpiceType.Paprika);
		
		cinnamon.whoami();
		ginger.whoami();
		paprika.whoami();
	}
}

const spiceFactoryDemo = new SpiceFactoryMethodDemo();
spiceFactoryDemo.run();
