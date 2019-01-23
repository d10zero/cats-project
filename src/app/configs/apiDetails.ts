export class ApiDetails {
	public static get darkskyURL(): string { return "https://api.darksky.net/forecast/" };
	public static get weatherRequest(): string { return "https://api.darksky.net/forecast/08867eac5f8023d58edb187c8d2228c1/" };
	public static get catImages(): string { return "http://localhost:8081/http://thecatapi.com/api/images/get?format=json&results_per_page=25" };
	public static get catFacts(): string { return "http://localhost:8081/http://catfact.ninja/facts?limit=25" };

}