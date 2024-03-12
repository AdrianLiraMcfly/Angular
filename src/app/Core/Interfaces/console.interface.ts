export interface Root {
    consoles: Console[]
  }
  
  export interface Console {
    id: number
    name: string
    maker: string
    suppliers: Supplier
    console_inventory: ConsoleInventory
  }
  
  export interface Supplier {
    id: number
    name: string
    email: string
    phone: string
    pivot: Pivot
  }
  
  export interface Pivot {
    console_id: number
    supplier_id: number
  }
  
  export interface ConsoleInventory {
    id: number
    console_id: number
    stock: number
    price: string
  }
  