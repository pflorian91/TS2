import {ISpice} from '../../../domain-objects/spice/ISpice';
import {SpiceType} from '../../../domain-objects/spice/SpiceType';
import {Paprika} from '../../../domain-objects/spice/Paprika';
import {Ginger} from '../../../domain-objects/spice/Ginger';
import {Cinnamon} from '../../../domain-objects/spice/Cinnamon';

export interface ISpiceFactoryMethod {
	getSpice(type: SpiceType): ISpice;
}

/**
 * @description Spice factory method
 */
export class SpiceFactoryMethod implements ISpiceFactoryMethod {
	
	public getSpice(type: SpiceType): ISpice {
		switch (type) {
			case SpiceType.Cinnamon:
				return new Cinnamon();
			case SpiceType.Ginger:
				return new Ginger();
			case SpiceType.Paprika:
				return new Paprika();
		}
	}
}
