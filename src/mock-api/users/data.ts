import { User } from "src/app/api/models";

export const users: User[] = [
  {
    "id": 1,
    "firstname": "John",
    "lastname": "Smith",
    "email": "john.smith@example.com",
    "birthDate": "1980-01-23",
    "address": {
      "id": 1,
      "street": "Lindenstraße 89",
      "city": "Freiburg im Breisgau",
      "country": "DE",
      "postalcode": "42030"
    }
  }
]
