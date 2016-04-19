import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
@Component({
    selector: 'app',
    template: require('./app.template.html')
})

export class AppComponent implements OnInit {
    private fire_list:Observable<any>;
    private test: any;
    constructor (private af:AngularFire) {
        this.fire_list = af.database.list('/test');
    }

    ngOnInit() {
    this.fire_list.subscribe(
            response => {
                this.test = response;
            },
            error => console.log(error.text())
        )
    }
}