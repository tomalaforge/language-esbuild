import { Component, LOCALE_ID, inject } from '@angular/core';

@Component({
  standalone: true,
  selector: 'language-esbuild-root',
  template: `
    <div i18n="@@firtname">Firtname</div>
    <div>Locale = {{ locale }}</div>
  `,
})
export class AppComponent {
  locale = inject(LOCALE_ID);
}
