export default interface Game {
  readonly Id: number | null;
  readonly Name: string | null;
  readonly Released_Date: string | null;
  readonly Background_Image: string | null;
  readonly Developer: string | null;
  readonly Platform: string | null;
  readonly Genre: string | null;
  readonly Description: string| null;
}