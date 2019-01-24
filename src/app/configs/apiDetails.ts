export class ApiDetails {
	public static get catImages(): string { return "http://localhost:8081/http://thecatapi.com/api/images/get?format=json&results_per_page=25" };
	public static get catFacts(): string { return "http://localhost:8081/http://catfact.ninja/facts?limit=25" };

}