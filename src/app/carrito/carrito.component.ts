import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { CarritoService } from '../carrito.service';
import { Product } from '../product';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  local:String;
  carrito:any[];
  products: Product[] = [];
  total:number = 0;
  
  constructor(private db: AngularFireDatabase, private cs: CarritoService) { }

  ngOnInit() {
    this.local = localStorage.getItem("carrito")===null?"":localStorage.getItem("carrito");
    this.carrito  = this.local.split("|",20);
    for(let product of this.carrito){
      product = JSON.parse(product);
      this.products.push(product);
      this.total+= +product.price;
    }
  }

}
