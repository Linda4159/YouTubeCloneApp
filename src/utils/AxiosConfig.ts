import axios from "axios"

const Instance = axios.create({
    baseURL: 'https://youtube-search-and-download.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': '39d4eabca4msh4182ee568df27a3p199885jsnf2b7d76abcb2',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
})

    
export default Instance
  