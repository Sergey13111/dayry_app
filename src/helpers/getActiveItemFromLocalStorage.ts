export const getActiveItemFromLocalStorage = () => {
	const storedActiveItem = localStorage.getItem('activeItem');
	return storedActiveItem ? JSON.parse(storedActiveItem) : '';
};
