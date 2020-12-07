/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReactionService } from './reaction.service';

describe('Service: Reaction', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReactionService]
    });
  });

  it('should ...', inject([ReactionService], (service: ReactionService) => {
    expect(service).toBeTruthy();
  }));
});
