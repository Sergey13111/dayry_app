export const getItemsFromLocalStorage = () => {
	const storedItems = localStorage.getItem('items');
	return storedItems ? JSON.parse(storedItems) : [];
};
