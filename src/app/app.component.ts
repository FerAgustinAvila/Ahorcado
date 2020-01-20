import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent {

  palabraup = this.pedirPalabra()
  palabra = this.palabraup.toUpperCase();
  palabraOculta = '';

  intentos = 0;

  gano = false;
  perdio = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


  constructor(){
    

      this.palabraOculta = '_ '.repeat(this.palabra.length);
    
      


  };


  pedirPalabra(){
    var palabrap = prompt("Ingrese la palabra para el juego:")

    return palabrap;
  }

  comprobar( letra ){

      this.existeLetra( letra );
    
      const palabraOcultaArr = this.palabraOculta.split(' ');

      for(let i = 0; i < this.palabra.length; i++){
        if(this.palabra[i] === letra ){
          palabraOcultaArr[i] = letra;
        };
      };

      
      this.palabraOculta = palabraOcultaArr.join(' ');
      this.verificaGane();

  };

  verificaGane(){

        const palabraArr = this.palabraOculta.split(' ');
        const palabraEvalua = palabraArr.join('');

        if( palabraEvalua === this.palabra ){
          this.gano = true;
          console.log('El usuario GANO');
        }


        if ( this.intentos >= 9){
          this.perdio = true;
          console.log('perdiste LOOSER');
        }
      
  };

  existeLetra( letra ){

      if( this.palabra.indexOf( letra ) >= 0 ){
        // console.log('encontro letra');
      } else {
        // console.log('no encontro');
        this.intentos ++;
      };
  };

};