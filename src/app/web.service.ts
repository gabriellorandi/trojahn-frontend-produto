import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './Produto';
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebService {

  baseURL = "http://localhost:8081";


  getProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseURL + "/produtos");
  }

  cadastrarProduto(produto) : Observable<any>{
    let body = new HttpParams();
    body = body.set("titulo", produto.title);
    body = body.set("preco", String(produto.price));
    body = body.set("descricao", produto.description);
    return this.http.post(this.baseURL + "/produtos", body, {observe: "response"});
  }

  constructor(private http : HttpClient) { }
}
