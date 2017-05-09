export interface IReusable<T extends object> {
	// constructor
	new(): T;
	// static
	reset?(obj: T): void;
}

export interface IReusablePool<T extends object> {    // name it ReusableFood
	getInstance(): IReusablePool<T>;   // static
	acquireReusable(): T;
	releaseReusable(reusable: T): void;
	setMaxPoolSize(size: number): void;
}

/**
 * @description Reusable pool
 */
export class ReusablePool<T extends object> implements IReusablePool<T> {
	
	private instanceTime: Date; // remove this. just for debuggin to see that there is only one instance of objPool
	
	private pool: T[];
	private reusable: IReusable<T>;
	
	private constructor() {
		this.instanceTime = new Date();
	}
	
	public getInstance(): IReusablePool<T> {
		return null;
	}
	
	/**
	 * removes a reusable obj from the pool and returns it
	 * if there are no reusable objs in the pool, creates a new one.
	 * if it cannot create a reusable obj, then wait until one is released.
	 */
	public acquireReusable(): T {
		if (this.pool.length) {
			return this.pool.splice(0, 1)[0];
		}
		
		return new this.reusable();
	}
	
	public releaseReusable(reusable: T): void {
		if (this.reusable.reset) {
			this.reusable.reset(reusable);
		}
		
		this.pool.push(reusable);
	}
	
	public setMaxPoolSize(size: number): void {
		// will do
	}
}
