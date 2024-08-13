import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  onClicked(title:string) {
    alert(`Thank you for clicking ${title}`)
  }
}
