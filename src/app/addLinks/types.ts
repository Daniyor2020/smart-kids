export interface Video {
    url: string;
    thumbnail: string;
    user_id: string;
    title: string;
  }
  
  export interface User {
    id: number;
    username: string;
  }
  
  export interface YouTubeLinkFormState {
    link: string;
    title: string | null;
    selectedUser: string | null;
    error: string | null;
    loading: boolean;
  }