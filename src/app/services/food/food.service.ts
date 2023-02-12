import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

 
  constructor() { }

  getAll():string[]{
    return [
      '/assets/img15.jpg',
      '/assets/img2.jpg',
      '/assets/img3.jpg',
      '/assets/img4.jpg',
      '/assets/img1.jpg',
      '/assets/img9.jpg',
      '/assets/img17.jpg',
      '/assets/img6.jpg',
      

    ]
  }
}
