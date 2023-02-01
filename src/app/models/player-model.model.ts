export class PlayerModel {

  playerId: number;
  playerName: string;
  jeresyNumber: number;

  constructor(playerId: number, playerName: string, jeresyNumber:number,) {
    this.playerId = playerId;
    this.playerName = playerName;
    this.jeresyNumber = jeresyNumber;
  }
}
