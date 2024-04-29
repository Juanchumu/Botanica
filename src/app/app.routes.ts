import { Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { TimerComponent } from './components/timer/timer.component';

export const routes: Routes = [
	{ path: 'home', component: TimerComponent },
	{ path: 'info', component: InfoComponent },
	//{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '', component: TimerComponent },
	{ path: '**', component: TimerComponent },


];
