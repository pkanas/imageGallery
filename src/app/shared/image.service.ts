import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imageDetailList:AngularFireList<any>

  constructor(private firebase:AngularFireDatabase) { }
  getimageDetailList(){
    this.imageDetailList = this.firebase.list('imageDetails')
  }

  insertImageDetailes(imageDetails){
    this.imageDetailList.push(imageDetails)
  }
}
