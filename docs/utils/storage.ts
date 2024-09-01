/**
 * @description 数据缓存 storage localStorage
 * @method get() 获取 从本地缓存中同步获取指定 key 对应的内容。
 * @method set() 设置 将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
 * @method remove() 删除 从本地缓存中同步移除指定 key。
 * @method getAll() 获取所有 同步获取当前 storage 的相关信息。
 * @method clear() 清除所有 同步清理本地数据缓存。
 */
export const storage = {
	/**
	 * @description 获取 从本地缓存中同步获取指定 key 对应的内容。
	 * @param {string} name name
	 * @example get('name')
	 * @return any
	 */
	get: (name: string): any => {
		try {
			const data = window.localStorage.getItem(name);
			return data ? JSON.parse(data) : false;
		} catch (e) {
			const data = window.localStorage.getItem(name);
			return data ? data : false;
		}
	},
	/**
	 * @description 设置 将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
	 * @param {string} name name
	 * @param {any} value value
	 * @example set('name','value')
	 */
	set: (name: string, value: any): void => {
		// 如果 value 是对象，就把 value 转为 JSON 格式的字符串再存储
		if (typeof value === 'object') {
			value = JSON.stringify(value);
		}
		window.localStorage.setItem(name, value);
	},
	/**
	 * @description 删除 从本地缓存中同步移除指定 key。
	 * @param {string} name name
	 * @example remove('name')
	 */
	remove: (name: string): void => {
		window.localStorage.removeItem(name);
	},
	/**
	 * @description 获取所有 同步获取当前 storage 的相关信息。
	 * @example getAll()
	 * @return any
	 */
	getAll: (): any => {
		let length = window.localStorage.length
		let localStorageArr:{ key: string; val: string; }[] = [];
		for (let i = 0; i < length; i++) {
			let key = window.localStorage.key(i);
      if(!key) return;
			let val = window.localStorage.getItem(key);
      if(!val) return;
			localStorageArr.push({key: key,val: val});
		}
		return localStorageArr;
	},
	/**
	 * @description 清除所有 同步清理本地数据缓存。
	 * @example clear()
	 */
	clear: (): void => {
		window.localStorage.clear();
	}
};
