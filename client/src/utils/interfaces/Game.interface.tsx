export default interface Game {
  readonly id: string | null;
  readonly slug: string | null;
  readonly name: string | null;
  readonly released: string | null;
  readonly background_image: string | null;
  readonly developers: Keyable[];
  readonly platforms: Keyable[];
  readonly genres: Keyable[];
  readonly description_raw: string;
}

interface Keyable {
  [key:string] : any;
}