import type Album from '../types/album';

export const albums: Album[] = [
  {
    id: 1,
    albumTitle: 'Blurryface',
    albumAuthor: 'Twenty One Pilots',
    albumSlug: 'blurryface',
    albumCover: 'https://i.imgur.com/0s3suxY.jpg',
    albumSongs: [
      {
        id: 1,
        songTitle: 'Heavydirtysoul',
        songSlug: 'heavydirtysoul',
        songLength: '3:38',
      },
      {
        id: 2,
        songTitle: 'Stressed Out',
        songSlug: 'stressed-out',
        songLength: '3:23',
      },
      {
        id: 3,
        songTitle: 'Ride',
        songSlug: 'ride',
        songLength: '3:03',
      },
      {
        id: 4,
        songTitle: 'Fairly Local',
        songSlug: 'fairly-local',
        songLength: '3:15',
      },
    ],
    albumReleaseDate: '2015-05-15',
  },
  {
    id: 2,
    albumTitle: 'Trench',
    albumAuthor: 'Twenty One Pilots',
    albumSlug: 'trench',
    albumCover: 'https://i.imgur.com/0s3suxY.jpg',
    albumSongs: [
      {
        id: 1,
        songTitle: 'Jumpsuit',
        songSlug: 'jumpsuit',
        songLength: '3:38',
      },
      {
        id: 2,
        songTitle: 'Levitate',
        songSlug: 'levitate',
        songLength: '3:23',
      },
      {
        id: 3,
        songTitle: 'Nico and the Niners',
        songSlug: 'nico-and-the-niners',
        songLength: '3:03',
      },
    ],
    albumReleaseDate: '2018-10-05',
  },
  {
    id: 3,
    albumTitle: 'Vessel',
    albumAuthor: 'Twenty One Pilots',
    albumSlug: 'vessel',
    albumCover: 'https://i.imgur.com/0s3suxY.jpg',
    albumSongs: [
      {
        id: 1,
        songTitle: 'Car Radio',
        songSlug: 'car-radio',
        songLength: '3:38',
      },
      {
        id: 2,
        songTitle: 'Holding On To You',
        songSlug: 'holding-on-to-you',
        songLength: '3:23',
      },
      {
        id: 3,
        songTitle: 'Trees',
        songSlug: 'trees',
        songLength: '3:03',
      },
    ],
    albumReleaseDate: '2013-02-05',
  },
  {
    id: 4,
    albumTitle: 'Scaled and Icy',
    albumAuthor: 'Twenty One Pilots',
    albumSlug: 'scaled-and-icy',
    albumCover: 'https://i.imgur.com/0s3suxY.jpg',
    albumSongs: [
      {
        id: 1,
        songTitle: 'Shy Away',
        songSlug: 'shy-away',
        songLength: '3:38',
      },
      {
        id: 2,
        songTitle: 'Choker',
        songSlug: 'choker',
        songLength: '3:23',
      },
    ],
    albumReleaseDate: '2021-05-21',
  },
];
