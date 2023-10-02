import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertmodelComponent } from '../../sharepage/alertmodel/alertmodel.component';





/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {}
  

  openDialog() {
    const dialogRef = this.dialog.open(AlertmodelComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

