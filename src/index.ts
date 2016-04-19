import { bootstrap } from 'angular2/platform/browser';
import { provide } from 'angular2/core';
import './styl/test.styl';
import {ROUTER_PROVIDERS} from "angular2/router";
import {AppComponent} from "./app.component/app.component";
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

bootstrap( <any> AppComponent, [
    ROUTER_PROVIDERS,
    // Common injectable providers from the AngularFire lib
    FIREBASE_PROVIDERS,
    // Tell AngularFire the base URL for the Firebase used throughout
    defaultFirebase('https://scorching-torch-982.firebaseio.com')
]);
