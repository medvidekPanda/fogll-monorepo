import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() projects?: any;
  @Input() selectedProject?: string;

  constructor(
    private location: Location,
    private router: Router,
  ) {}

  navigateTo(event) {
    // this.router.navigate([`app/${event.detail.value}/project-management/`], {
    //   replaceUrl: true,
    // });
    this.router.navigate([`app/project-management/${event.detail.value}`], {
      replaceUrl: false,
    });
    // this.router.navigate([`app/project-management/`], {
    //   replaceUrl: false,
    // });
  }

  goBack() {
    this.location.back();
  }
}
