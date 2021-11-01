import { Component, OnInit } from '@angular/core';
import { DatabaseBaseService } from 'src/app/shared/service/database-base.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  inputValue?: string;

  constructor(
    private databaseBaseService: DatabaseBaseService,
  ) { }

  ngOnInit() {
  }

  onInputBlur(event) {
    this.inputValue = event.detail.value;
  }

  addNewProject() {
    const payload = {
      _id: `project:${uuidv4()}`,
      name: this.inputValue,
      type: 'project',
    };
    this.databaseBaseService.postDoc(payload).then(response => {
      console.log('response', response);
    }).catch(err => {
      console.log('err', err);
    });
  }

  removeProject() {
    console.log('this part of code is broken');
    // this.databaseBaseService.removeDocBulk({
    //   view: 'day-events/list',
    //   options: { key: 'projekt-c.-1'},
    // });
  }

}
