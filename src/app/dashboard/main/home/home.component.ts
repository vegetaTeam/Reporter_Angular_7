import { Component, OnInit } from '@angular/core';
import {BoardsService} from "../../../services/APITrello/boards.service";

@Component({
  selector: 'Reporter-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public userBoards: {};
  public showWaiter:boolean = true;

  constructor(
    private _boardService: BoardsService
  ) {}

  ngOnInit() {

    this._boardService.subscriptionBoardService().subscribe(
      (next) => {
        this.userBoards = next;
        this.showWaiter = false;
      }
    );

    this._boardService.getAllBoardsMember();
  }

}
