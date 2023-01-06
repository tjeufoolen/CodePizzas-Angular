import { OnlineResource } from './online-resource';

describe('OnlineResource', () => {
  it('should create an instance', () => {
    const resource: OnlineResource = new OnlineResource(
      "https://placeholder.com/image.jpeg",
      "Placeholder image"
    );
    expect(resource).toBeTruthy();
  });
});
