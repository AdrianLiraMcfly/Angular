export interface GameShow {
    game: Game
  }
  
  export interface Game {
    id: number
    name: string
    maker: string
    category_id: number
    category: Category
    game_inventory: GameInventory
    suppliers: Supplier[]
  }
  
  export interface Category {
    id: number
    name: string
  }
  
  export interface GameInventory {
    id: number
    game_id: number
    stock: number
    price: string
  }
  
  export interface Supplier {
    id: number
    name: string
    email: string
    phone: string
    pivot: Pivot
  }
  
  export interface Pivot {
    game_id: number
    supplier_id: number
  }