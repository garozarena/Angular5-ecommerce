import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products: Observable<any[]>;
  _id: number;
  carrito = localStorage.getItem("carrito");

  

  constructor( private db: AngularFireDatabase, private route: ActivatedRoute,private cs:CarritoService) {  }

  ngOnInit() {
    this._id = this.route.snapshot.params["id"];
    this.products=this.cs.getAllProducts();
    console.log(this.carrito);
    
  }

  anadirCarrito(product){

    console.log(JSON.stringify(product));

    this.carrito = this.carrito===null ? JSON.stringify(product) : this.carrito+"|"+JSON.stringify(product);

    localStorage.setItem("carrito", ""+this.carrito);

    console.log(this.carrito);

  }

}
