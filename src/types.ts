export interface NFT {
  id: string;
  name: string;
  collection: string;
  creator: string;
  price: number;
  image: string;
  type: 'auction' | 'buy-now';
  timeLeft?: string;
  verified?: boolean;
  likes: number;
}

export interface Collection {
  id: string;
  name: string;
  banner: string;
  avatar: string;
  floorPrice: number;
  volume: number;
}

export interface Artist {
  id: string;
  name: string;
  avatar: string;
  volume: number;
  change: number;
}
