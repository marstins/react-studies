const travel = [
  {
    id: 1,
    country: "belgium",
    place: "bruges",
    mapLink: "https://www.google.com.br/maps/place/Bruges,+Belgium/@51.2609144,3.0820263,11z/data=!3m1!4b1!4m5!3m4!1s0x47c350d0c11e420d:0x1aa2f35ac8834df7!8m2!3d51.2091807!4d3.2247552?hl=en",
    source: {
      url: "https://unsplash.com/photos/XgKmVFbuPsg",
      photographer: "https://unsplash.com/@evgeeeenchik"
    },
    startDate: "05 July, 2016",
    endDate: "20 July, 2016",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris lorem, dapibus nec elit quis, auctor maximus neque. Mauris eget purus vitae nibh imperdiet finibus a egestas purus. Ut dictum tempus lacus, ac tempor sapien malesuada vitae. Nunc consectetur aliquet leo, et dictum justo euismod non. Donec risus ipsum, ornare non ex vitae, euismod imperdiet lacus. Duis non iaculis odio. Ut finibus, mauris non congue laoreet, tortor dui luctus nisl, ut iaculis nisi nisi at lectus. Mauris fringilla sagittis nisl placerat vulputate. In sit amet dui aliquam, rhoncus justo sit amet, posuere nisi."
  },

  {
    id: 2,
    country: "spain",
    place: "granada",
    mapLink: "https://www.google.com.br/maps/place/Granada,+Spain/@37.1810095,-3.6262911,13z/data=!3m1!4b1!4m5!3m4!1s0xd71fce62d32c27d:0x9258f79dd3600d72!8m2!3d37.1773363!4d-3.5985571?hl=en",
    source: {
      url: "https://unsplash.com/photos/RmEz8lYpiDw",
      photographer: "https://unsplash.com/@girlwithredhat"
    },
    startDate: "17 June, 2015",
    endDate: "30 June, 2015",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis nulla ornare nibh aliquam, semper vulputate magna porttitor. Fusce vitae maximus leo. Duis ut interdum lorem. Vivamus vehicula viverra finibus. Integer erat velit, facilisis vel pellentesque sed, porta a nisi. Proin lacinia ac diam vitae tempor. Donec congue a sapien vel ornare. Fusce laoreet dui magna, quis egestas dolor ultrices in. Sed sagittis massa tristique neque aliquam porta. Quisque hendrerit fringilla dui, in malesuada sem suscipit quis. Donec eget nunc pretium, bibendum ligula ut, faucibus purus. Donec at purus nec tellus consectetur suscipit eu et eros. Vestibulum ut sem dapibus, auctor eros in, condimentum elit. Nulla suscipit non dolor non interdum."
  },

  {
    id: 3,
    country: "england",
    place: "london",
    mapLink: "https://www.google.com.br/maps/place/London,+UK/@51.5287718,-0.2416804,11z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862?hl=en",
    source: {
      url: "https://unsplash.com/photos/W1Y4Y_DBGKw",
      photographer: "https://unsplash.com/@alexazabache"
    },
    startDate: "01 January, 2008",
    endDate: "31 January, 2008",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum neque nec interdum auctor. Cras iaculis diam vel massa consectetur, at luctus metus mattis. Nullam bibendum tempus ligula, ornare lacinia sem. Fusce vulputate fermentum vehicula. Vestibulum malesuada magna quis dui gravida facilisis vel sit amet quam. Donec sapien lorem, aliquam at egestas non, tristique id urna. Vivamus eget aliquet nisl. Aliquam erat volutpat. Vestibulum enim ex, efficitur ut mi at, ornare suscipit elit. Maecenas mollis lorem metus, non tincidunt dolor sodales eu. Aenean sit amet nulla nunc. Mauris elementum imperdiet lectus, sit amet volutpat mauris. Cras viverra pellentesque tellus. Cras ac eros id est laoreet faucibus ut at enim. Nulla finibus faucibus tellus, ut elementum nisi vulputate vitae. Nullam nec quam ut erat dignissim bibendum id ut magna." 
  },

  {
    id: 4,
    country: "france",
    place: "paris",
    mapLink: "https://www.google.com.br/maps/place/Paris,+France/@48.8589466,2.2769955,12z/data=!3m1!4b1!4m5!3m4!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.856614!4d2.3522219?hl=en",
    source: {
      url: "https://unsplash.com/photos/DXuxHw3S5ak",
      photographer: "https://unsplash.com/@earth"
    },
    startDate: "27 February, 2012",
    endDate: "13 March, 2012",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed odio nisi. Vivamus rhoncus dui ac tincidunt dapibus. Quisque rhoncus elit vitae ex rutrum scelerisque. Phasellus molestie eros metus, eget venenatis ipsum porta at. Curabitur nisi purus, posuere nec facilisis et, tincidunt sit amet tellus. Maecenas vestibulum auctor justo, ut pharetra orci placerat ut. Vivamus elementum ante sit amet diam facilisis sodales."
  },

  {
    id: 5,
    country: "portugal",
    place: "porto",
    mapLink: "https://www.google.com.br/maps/place/Porto,+Portugal/@41.1622023,-8.656973,13z/data=!3m1!4b1!4m9!1m2!2m1!1sporto!3m5!1s0xd2465abc4e153c1:0xa648d95640b114bc!8m2!3d41.1579438!4d-8.6291053!15sCgVwb3J0byIDiAEBkgEIbG9jYWxpdHk?hl=en",
    source: {
      url: "https://unsplash.com/photos/vn5tA8AsOYc",
      photographer: "https://unsplash.com/@alexrvasey"
    },
    startDate: "25 September, 2018",
    endDate: "30 September, 2018",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non elementum quam. Pellentesque eu augue pretium enim venenatis efficitur a mattis justo. Suspendisse in metus hendrerit, vestibulum ipsum non, maximus enim. Suspendisse eget erat non velit euismod ullamcorper vitae eget metus. In porttitor sapien velit, vitae interdum elit pretium id. Aliquam eu ultricies mauris. Maecenas magna sem, viverra placerat nibh vitae, mollis consequat nisl. Sed dapibus lectus ac neque porttitor mattis. Fusce sollicitudin nisi eros, sagittis ultrices mi feugiat nec. Etiam eleifend velit id maximus vehicula. Nunc aliquam vel metus id auctor. Suspendisse potenti. Nulla tempor velit ac diam blandit maximus."
  }
]

export default travel