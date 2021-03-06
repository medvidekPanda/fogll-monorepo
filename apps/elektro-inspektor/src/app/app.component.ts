import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'inspektor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'elektro-inspektor';

  items: NbMenuItem[] = [
    {
      title: "dashboard",
      link: '/'
    },
    {
      title: "protocols",
      expanded: true,
      children: [
        {
          title: 'Zobrazit protokoly',
          link: "protocols/show"
        },
        {
          title: 'Vytvořit protokoly',
          link: "protocols/create"
        },
      ],
    },
    {
      title: "users",
      link: '/'
    },
    {
      title: "settings",
      link: '/'
    }
   ];
}
