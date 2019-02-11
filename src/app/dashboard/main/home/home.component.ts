import { Component, OnInit } from '@angular/core';
import {BoardsService} from "../../../services/APITrello/boards.service";

@Component({
  selector: 'Reporter-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public userBoards;

  constructor(
    private _boardService: BoardsService
  ) {}

  ngOnInit() {

    this._boardService.getBoard().subscribe(
      next => this.userBoards = next
    );

    this._boardService.loadBoard('/boards');
  }

}
