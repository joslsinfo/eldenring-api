class EldenService {
	constructor() { }

	url = "https://eldenring.fanapis.com/api/creatures";

	async getEldens() {
		try {
			// const response = await fetch(this.creaturesUrl);
			const response = await fetch(this.url);
			if (!response.ok) throw new Error(response.statusText);
				console.log(response);
			const data = await response.json();
			console.log(data);
			
			//  return (await response.json()).data;
			return data.data;
	

			
		} catch (e) {
			console.error(e);

			return{
			data: [],
		};
	}
}

	// async getEldenWithReturnedUrl(url) {
	// 	try {
	// 		const response = await fetch(url);
	// 		if (!response.ok) throw new Error(response.statusText);
	// 		return await response.json();
	// 	} catch (e) {
	// 		console.error(e);

	// 		return {};
	// 	}
	// }
}

export default EldenService;