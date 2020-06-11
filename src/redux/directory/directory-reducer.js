const INITIAL_STATE = {
    sections: [
    {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/FxRWrgc/hats.png',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/yg01RSC/jackets.png',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/7knpkz7/sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/4fHPts1/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/PDjwZwt/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }
]
}

const directoryReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        default:
            return state;
    }
   
}

export default directoryReducer;