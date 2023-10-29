import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Output() filterTextChanged: EventEmitter<string> = new EventEmitter<string>();


  constructor(private router: Router) { }

  ngOnInit() {}

  goToSearch() {
    this.router.navigate(['/tabs/recipes']);
  }
  onFilterTextChanged(event: any) {
    
    this.filterTextChanged.emit(event.detail.value);
    this.router.navigate(['/tabs/recipes']);
  }

}
