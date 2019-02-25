import {Component, OnInit} from '@angular/core';
import {BoardsService} from "../../../services/apiTrello/boards.service";

@Component({
  selector: 'Reporter-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {

  public board;
  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';

  constructor(private _boardsService: BoardsService) {
  }

  ngOnInit() {

    // this._boardsService.subscriptionBoardService().subscribe(
    //   next => this.board = next
    // );
    //
    // this._boardsService.getOneBoard();

  }


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


}
