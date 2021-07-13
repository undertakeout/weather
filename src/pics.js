
const getWeather = (status) =>{
  status = status.toLowerCase()
  switch(status){
    case 'cloudy':
      return "https://dominicantoday.com/wp-content/uploads/2020/04/istock__..featured_image_4..cloudy_2.jpg.jpg"
      break
    case 'sunny':
      return "https://sierrawave.net/wp-content/uploads/2021/06/sunny-and-breezy-2.jpg"
      break
    case "rain":
      return "https://www.treehugger.com/thmb/6u0wbqYvi-7wxKEoueucTLDcttM=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__03__raindrops-plants-smell-57c4545c1bb844c0a2cd7e0252cf6d2f.jpg"
      break
    case "snow":
      return "https://www.wytv.com/wp-content/uploads/sites/77/2021/01/snow-tree-branch-snowing-winter-weather-generic.jpg?w=1280"
      break
    case "partly cloudy":
      return "https://wpcdn.us-east-1.vip.tn-cloud.net/www.klkntv.com/content/uploads/2020/04/cloud1.jpg"
      break
    default:
      return 3
  }

}

export default getWeather