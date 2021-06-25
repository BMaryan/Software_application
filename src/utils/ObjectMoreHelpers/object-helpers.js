export const updateObjectInArray = (items, itemId, objPropsName, newObjProps) => {
	return items.map(item => {
		if (item[objPropsName] === itemId) {
			return { ...item, ...newObjProps };
		}

		return item;
	});
};
