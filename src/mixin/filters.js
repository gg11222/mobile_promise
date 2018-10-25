import { typeConfig } from "./index"
export default {
  filters: {
    $_filterType: (value) => {
      return typeConfig[value] || "type undefined"
    }
  }
}