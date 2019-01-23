import { Component } from '@angular/core';
import { CatService } from './services/cats.service';
import { Subscriber } from  'rxjs';
import { CatCard } from './models/catcard.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bento';

  showFavorite = false

  catCards = new Array<CatCard>()

  constructor(private catService: CatService) {
    
  }

  ngOnInit(){

    this.findCatFact()
    //this.findCatImage()
  }

  viewAllCards() {
    this.showFavorite = false;
  }

  viewFavorites() {
    this.showFavorite = true
    console.log("favorite cat cards:", this.catCards)
  }

  compare(a, b) {
    if (a.lastWord > b.lastWord) return 1
    if (a.lastWord < b.lastWord) return -1
    return 0
  }

  sortPhotos() {
    this.catCards.sort(this.compare)
  }

  findCatFact() {
    this.catService.getCatFacts().subscribe(result => {
      let json = result;
      if(json.data){
        for(var i = 0; i < json.data.length; i++){
          var currentCat = new CatCard()
          currentCat.fact = json.data[i].fact
          let lastWord = json.data[i].fact.split(/[\s,]+/).splice(-1)[0]
          lastWord = lastWord.toLowerCase()
          currentCat.lastWord = lastWord.replace(/[^a-zA-Z ]/g, "")
         this.catCards.push(currentCat);
        }
        this.findCatImage()
      }
    })

  }

  findCatImage() {
    this.catService.getCatImages().subscribe(result => {
      let json = result;
      if(json){
        for(var i = 0; i < json.length; i++){
          this.catCards[i].image = json[i].url
          this.catCards[i].id = json[i].id
          this.catCards[i].favorite = false
        } 
      } 
    })
  }
}
