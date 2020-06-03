import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
  petName = 'parrot';
  petImage = 'https://baoxaydung.com.vn/stores/news_dataimages/hiep/102016/11/09/093712baoxaydung_8.jpg';
  constructor() { }
  updateName(name){
    this.petName = name;
  }
  updateImage(image){
    this.petImage = image;
  }

  ngOnInit(): void {
  }

}
