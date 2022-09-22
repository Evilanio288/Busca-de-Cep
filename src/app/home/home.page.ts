import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
cep : string;
logradouro: string;
localidade: string;
uf: string;
result :any ;
  constructor(private http: HttpClient) {}

  BuscarCep() {
    console.log(this.cep);
    let url ="http://viacep.com.br/ws/" + this.cep +"/json/";
    this.result = this.http.get(url).toPromise();
    console.log(this.result);
    this.result.then((json) => {
     console.log(json);
     this.logradouro = json.logradouro;
     this.localidade = json.localidade;
     this.uf = json.uf
    })

      .catc((erro) => {
        console.log("Erro ao carregar a requisicão");
        console.log(erro);
      });
    }
  }

  
