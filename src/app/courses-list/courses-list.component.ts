import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Product } from '../product';
import { Router } from '@angular/router';
import { CarritoService } from '../carrito.service';
@Component({
  selector: 'courses-list',
  templateUrl: 'courses-list.component.html',
  styles: []
})
export class CoursesListComponent implements OnInit {
  courses: Observable<any[]>;
  constructor(private db: AngularFireDatabase, private router: Router, private cs: CarritoService) { }

  ngOnInit() {
    this.courses = this.cs.getAllProducts();
  }

}