import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'inspektor-protcols',
  templateUrl: './protocols.page.html',
})
export class ProtocolsPageComponent {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  private goToApp(id: string) {
    this.router.navigate([`app/project-management/${id}`]);
  }
}
