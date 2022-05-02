const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			path: "",
			favorites: []
		},
		actions: {
			loadingData: str => {
				fetch("https://swapi.dev/api/" + str + "/")
					.then(response => response.json())
					.then(data =>
						setStore({
							[str]: data.results
						})
					)
					.catch(error => console.log(error));
			},
			addUrl: str => {
				setStore({ path: str });
			},
			getDetail: url => {
				fetch(url)
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},
			likedItem: str => {
				console.log("");
				const store = getStore();
				console.log("2", str, store);

				const validate = store.favorites.includes(str);
				if (!validate) {
					setStore({ favorites: [...store.favorites, str] });
				}
			},
			deleteItem: id => {
				const state = getStore();
				const deleteditem = state.favorites;
				deleteditem.splice(id, 1);
				setStore({ favorites: deleteditem });
			}
		}
	};
};

export default getState;
