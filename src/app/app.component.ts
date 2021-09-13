import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'iLabel';

  constructor(private titleService: Title, metaService: Meta) {
    titleService.setTitle(this.title);

    metaService.updateTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    });
    metaService.addTag(
      {
        name: 'description',
        content: 'iLabel sample orders management system',
      },
      true
    );
    metaService.addTag(
      { name: 'author', content: 'Indsys Holdings Pvt Ltd' },
      true
    );
  }
}
