import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const Api = '564553a2905a559ea5005a4b8b5e9e1b';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

    getRecipes() {
      return this.http.get(`https://api.edamam.com/search?q=top&from=0&to=12&app_id=073e7c29&app_key=${Api}`);
    }
    getOneRecipe(name) {
      return this.http.get(`https://api.edamam.com/search?q=${name}&from=0&to=1&app_id=073e7c29&app_key=${Api}`);
    }
    search(word) {
      return this.http.get(`https://api.edamam.com/search?q=${word}&from=0&to=20&app_id=073e7c29&app_key=${Api}`);
    }
}
