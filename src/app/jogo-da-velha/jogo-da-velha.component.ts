import { Component, OnInit } from '@angular/core';

import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css'],
})
export class JogoDaVelhaComponent implements OnInit {
  constructor(private jogoDaVelhaService: JogoDaVelhaService) {}

  ngOnInit(): void {
    this.jogoDaVelhaService.inicializar();
  }

  /**
   * Retorna se a tela de início deve ser exibida.
   *
   * @return boolean
   */
  get showInicio(): boolean {
    return this.jogoDaVelhaService.showInicio;
  }

  /**
   * Retorna se a tela de tabuleiro deve ser exibida.
   *
   * @return boolean
   */
  get showTabuleiro(): boolean {
    return this.jogoDaVelhaService.showTabuleiro;
  }

  /**
   * Retorna se a tela de fim de jogo deve ser exibida.
   *
   * @return boolean
   */
  get showFinal(): boolean {
    return this.jogoDaVelhaService.showFinal;
  }

  /**
   * Inicializa os dados de um novo jogo
   *
   * @return void
   */
  iniciarJogo($event: any): void {
    $event.preventDefault();
    this.jogoDaVelhaService.iniciarJogo();
  }

  /**
   * Realiza uma jogada ao clicar em um local no tabuleiro
   *
   * @param number posX
   * @param number posY
   * @returns void
   */
  jogar(posX: number, posY: number): void {
    this.jogoDaVelhaService.jogar(posX, posY);
  }

  /**
   * Retorna se a peça X deve ser exibida para a coordenada informada
   *
   * @param number posX
   * @param number posY
   * @returns boolean
   */
  exibirX(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirX(posX, posY);
  }

  /**
   * Retorna se a peça O deve ser exibida para a coordenada informada
   *
   * @param number posX
   * @param number posY
   * @returns boolean
   */
  exibirO(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirO(posX, posY);
  }
  /**
   * Retorna se a marcação de vitória deve ser exibida para a cordenada informada
   *
   * @param number posX
   * @param number posY
   * @returns boolean
   */
  exibirVitoria(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirVitoria(posX, posY);
  }

  /**
   * REtorna o número do jogador a jogar
   * @returns number
   */
  get jogador(): number {
    return this.jogoDaVelhaService.jogador;
  }

  /**
   * Inicia um novo jogo
   * @returns void
   */
  novoJogo($event): void {
    $event.preventDefault();
    this.jogoDaVelhaService.novoJogo();
  }
}
