//import statement gives me access to Component decorator
import { Component } from '@angular/core';

//component decorator that associates metadata to Angular's core @Component decorator function
@Component({
	//selector basically specifies css selector for the html element that represents this component
	selector: 'my-app',
	//template tells angular how to render the view
	template: '<h1>My first Angular2 App!</h1>'
})

//component class that controls the appearance and behavior of a view through its template.
//Here you only have root component
//class is empty because no logic is involved
//export statement done so it can be imported by the application created
export class AppComponent { }