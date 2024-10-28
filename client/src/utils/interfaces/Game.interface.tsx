export default interface Game {
  readonly id: string | null;
  readonly slug: string | null;
  readonly name: string | null;
  readonly released: string | null;
  readonly background_image: string | null;
  readonly Developer: string | null;
  readonly platforms: Keyable[];
  readonly genres: Keyable[];
  readonly Description: string| null;
}

interface Keyable {
  [key:string] : any;
}