import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FunctionsProvider } from '../../providers/functions/functions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  	slides = [
	    {
	      title: "Welcome to the Docs!",
	      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
	      image: "assets/imgs/sliders/1-450.jpg",
	    },
	    {
	      title: "What is Ionic?",
	      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
	      image: "assets/imgs/sliders/2-450.jpg",
	    },
	    {
	      title: "What is Ionic Cloud?",
	      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
	      image: "assets/imgs/sliders/3-450.jpg",
	    }
	];
	

 	constructor(public navCtrl: NavController, public functionService: FunctionsProvider) {
 		// public functionService: Functions
	  	/*var headers = new Headers();
	    headers.append('Access-Control-Allow-Origin' , '*');
	    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
	    headers.append('Accept','application/json');
	    headers.append('content-type','application/json');
	    //let options = new RequestOptions({ headers:headers,withCredentials: true});

	  	this.films = this.httpClient.get('http://192.168.2.117/PROJECTS/pabilis/ajax/api_products', {}, {headers:headers});
	    this.films
	    .subscribe(data => {
	      console.log('my data: ', data);
	    })*/
 	}

  	ionViewDidLoad() {  		
  		this.functionService.latestProducts();
  	}

  /*openDetails(film) {
    this.navCtrl.push('FilmDetailsPage', {film: film});
  }*/

   	/*constructor(public loadingCtrl: LoadingController) { }
	presentLoading() {
	    this.loadingCtrl.create({
	      content: 'Please wait...',
	      duration: 3000,
	      dismissOnPageChange: true
	    }).present();
	}*/

}
