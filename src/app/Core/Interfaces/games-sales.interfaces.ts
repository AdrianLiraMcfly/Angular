export interface Root {
    data: Daum[]
  }
  
  export interface Daum {
    id: number
    name: string
    email: string
    email_verified_at: any
    status: number
    created_at: any
    updated_at: any
    purchased_games: any[]
  }
  