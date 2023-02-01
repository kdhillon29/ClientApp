import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { PlayerModel } from '../models/player-model.model';
import { PlayersService } from '../services/players.service';
import { PlayerFormComponent } from './player-form/player-form.component';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent {
  dataSources!: MatTableDataSource<PlayerModel>;
  displayedColumns: string[] = ['name', 'jerseyNumber', 'Actions'];

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private playerService: PlayersService) { }

    ngOnInit():void {
     this.getPlayers();
  }

  // gets the players from db
   getPlayers() {
    console.log('inside getplayer')
     this.playerService.getAllPlayers().subscribe((res: PlayerModel[] | undefined) => {
      console.log(res);
      this.dataSources = new MatTableDataSource(res);
    });

  }

  addPlayer() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '450px';

    let dialogRef = this.dialog.open(PlayerFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(res => {
      console.log('in afterclosed')
      console.log(res)
      if (res != 0) {
        console.log(' player was created');

        this._snackBar.open("Player was created Successfully", "Close", {
          duration: 500,
        });
        this.getPlayers()
      }
      else {
        console.log('The dialog was closed');
      }
      this.getPlayers()
    });

  }

  editPlayer(player: PlayerModel) {
    console.log(player.playerName + " player to edit")

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '450px';
    dialogConfig.data = {
      player: player
    }

    let dialogRef = this.dialog.open(PlayerFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(res => {
      if (res != 0) {
        console.log('The dialog was closed but player was edited');

        this._snackBar.open("Player was created Edited", "Close", {
          duration: 500,
        });
        this.getPlayers()
      }
      else {
        console.log('The dialog was closed');
      }
      this.getPlayers()

    });
  }

  async deletePlayer(player: PlayerModel) {
    console.log(player + " player to delete")

    await this.playerService.deletePlayer(player).subscribe((res: any) => {
      this.getPlayers()
      this._snackBar.open("Player was Deleted Successfully", "Close", {
        duration: 500,
      });
    });

  }
}
