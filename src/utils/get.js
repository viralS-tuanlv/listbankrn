// import { create } from 'apisauce'
const URI = 'http://localhost:5200/people'

export default {
  async fetchPeoples() {
    try {
      let response = await fetch(URI)
      console.log(response)
      let responseJsonData = await response.json()
      return console.log(responseJsonData)
    } catch (error) {
      console.error(error)
    }
  }
}
