interface FeedItem {
  user: {
    pk: number;
    username: string;
    full_name: string;
    profile_pic_url: string;
    is_verified: boolean;
    is_private: boolean;
  }
  display_url: string;
  comment_count: number;
  like_count: number;
  view_count: number;
  play_count: number;
  carousel_media: FeedCarouselItem[];
}
interface FeedCarouselItem {
  image_versions2: {
    candidates: {
      url: string;
      width: number;
      height: number;
    }
  },
  display_url: string;
}
export interface UserFeed {
  more_available: boolean;
  status: string;
  end_cursor: string;
  items: FeedItem[];
}
