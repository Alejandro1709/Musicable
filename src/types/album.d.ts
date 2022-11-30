import type Song from './song';

export default interface Album {
  id: number;
  albumTitle: string;
  albumAuthor: string;
  albumSlug: string;
  albumCover: string;
  albumSongs: Song[];
  albumReleaseDate: string;
}
