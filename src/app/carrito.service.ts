import { Injectable } from '@angular/core';
import { FirebaseDatabase } from '@firebase/database-types';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CarritoService {

  constructor(private db: AngularFireDatabase) { }

  getAllProducts(){
    return this.db.list("/products").valueChanges();
  }

}
