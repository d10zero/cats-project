import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatCard } from '../models/catcard.model'
import { HostListener  } from "@angular/core";


@Component({
  selector: 'card',
  templateUrl: './card.component.html'
})

export class CardComponent {

	@HostListener("click") onClick(){
    console.log("User Click using Host Listener")
    this.catcard.favorite = !this.catcard.favorite
  	}

  @Input() catcard: CatCard;

  constructor() {}

 

}

