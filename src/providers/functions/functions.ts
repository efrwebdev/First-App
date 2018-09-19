import { Injectable } from '@angular/core';

@Injectable()
export class FunctionsProvider {

	//posts: any = [];

	constructor() {
	}

	load() {
	  	this.posts = [
	  		{title:'Hello'},
	  		{title:'Hello 2'},
	  		{title:'Hello 3'},
	  		{title:'Hello 4'},
	  		{title:'Hello 5'},
	  	];
	}

	latestProducts() {
		this.products = [
			{name: "S Neo Green Bag Pack", price: "99.99", image:"assets/imgs/products/1.jpg"},
			{name: "Bow Flex Red Handbag", price: "500.99", image:"assets/imgs/products/2.jpg"},
			{name: "Handbag with a very long name and 3 lines thats why we added this to make it longer", price: "500.00", image:"assets/imgs/products/3.jpg"},
			{name: "Handbag", price: "80.00", image:"assets/imgs/products/4.jpg"},
			{name: "Handbag with a long name", price: "500.00", image:"assets/imgs/products/5.jpg"},
			{name: "Handbag with a long name", price: "500.00", image:"assets/imgs/products/6.jpg"},
			{name: "Handbag with a long name", price: "500.00", image:"assets/imgs/products/5.jpg"},
			{name: "Handbag with a long name", price: "500.00", image:"assets/imgs/products/6.jpg"},
		]
	}
}
