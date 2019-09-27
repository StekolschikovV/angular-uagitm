import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {

  constructor(
    @Inject('config')
    private readonly config,
  ) {
    console.log(config);
  }
}