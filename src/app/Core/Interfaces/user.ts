export interface User {
  id: number
  name: string
  email: string
  email_verified_at: any
  status: number
  created_at: any
  updated_at: any
  rol: Role
}

export interface Role {
  id: number
  name: string
}
