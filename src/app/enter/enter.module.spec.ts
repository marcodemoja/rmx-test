import { EnterModule } from './enter.module';

describe('EnterModule', () => {
  let enterModule: EnterModule;

  beforeEach(() => {
    enterModule = new EnterModule();
  });

  it('should create an instance', () => {
    expect(enterModule).toBeTruthy();
  });
});
