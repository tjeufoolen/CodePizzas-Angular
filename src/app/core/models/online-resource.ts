export class OnlineResource {
  private _url: string;
  private _description: string;

  public constructor(url: string, description: string) {
    this._url = url;
    this._description = description;
  }

  public get url(): string {
    return this._url;
  }

  public set url(value: string) {
    this._url = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }
}
