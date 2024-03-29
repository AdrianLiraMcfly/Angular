export interface Root {
    games: Game[]
  }
  
  export interface Game {
    id: number
    name: string
    maker: string
    category_id: number
    category: Category
    supplier_id: number
    supplier: Supplier
    game_inventory_id: number
    game_inventory: GameInventory
  }
  
  export interface Category {
    id: number
    name: string
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
    supplier_id: number
  }
  
  export interface GameInventory {
    id: number
    game_id: number
    stock: number
    price: string
  }
  