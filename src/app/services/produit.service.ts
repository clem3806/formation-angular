import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../interfaces/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private url: string = "http://localhost:5555/produits";
  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Produit[]>(this.url);
  }
  addProduct(p: Produit) {
    return this.http.post<Produit>(this.url, p);
  }
}