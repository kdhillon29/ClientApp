import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
// import { environment } from 'src/environments/environment';
import { PlayerModel } from '../models/player-model.model';
// import { PlayerModel } from '../models/PlayerModel.model';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private path = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getAllPlayers(): Observable<any> {
    return this.httpClient.get<any[]>(this.path + "GetPlayers");
  }

  editPlayer(player: PlayerModel): any {
    const header = new HttpHeaders().set('Content-type', 'application/json');

    return this.httpClient.put(this.path + "Put", JSON.stringify(player), { headers: header })
  }

  createNewPlayer(player : PlayerModel): any {
    const header = new HttpHeaders().set('Content-type', 'application/json');

    return this.httpClient.post(this.path + "Post", JSON.stringify(player), { headers: header })
  }

  deletePlayer(player: PlayerModel): any {
    return this.httpClient.delete(this.path + "Delete/" + player.playerId)
  }


}
