import { Component, OnInit } from '@angular/core';
import { JsonApiService } from '../../services/json-service.service';
import { JsonUsers } from '../../interface/jsonusers';

@Component({
  selector: 'app-jsonuser',
  templateUrl: './jsonuser.component.html',
  styleUrls: ['./jsonuser.component.scss']
})
export class JsonuserComponent implements OnInit {
  usersjson: JsonUsers[] = [];
  newUser = { name: '', email: '' };

  constructor(private JsonApiService: JsonApiService) { }

  ngOnInit(): void {
    this.JsonApiService.getJsonUsers().subscribe(user => {
      this.usersjson = user;
    });
  }

  saveUser() {
    if (this.newUser.name && this.newUser.email) {
      this.JsonApiService.saveUser(this.newUser).subscribe(user => {
        this.usersjson.push(user);
        this.newUser = { name: '', email: '' };
      });
    }
  }

}
