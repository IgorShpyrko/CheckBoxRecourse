export default function(state = [], action) {
  return [
    {
      id:1,
      name: 'Audi',
      speed: 123,
      weight: 456,
      desc: 'This is audi',
      url: 'https://www.planwallpaper.com/static/images/Audi_R8_3_Quarter_75Souzo.jpg'
    },
    {
      id:2,
      name: 'BMW',
      speed: 234,
      weight: 123,
      desc: 'This is BMW',
      url: 'http://carrrsmag.com/data_images/makes/bmw/bmw-03.jpg'
    },
    {
      id:3,
      name: 'Mercedes',
      speed: 354,
      weight: 324,
      desc: 'This is Mercedes',
      url: 'https://financialtribune.com/sites/default/files/field/image/17january/11_benz_200.jpg'
    },
  ]
}