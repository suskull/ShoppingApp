import React, {Component} from 'react'
import './directory.scss'
import MenuItem from '../menu-item/menu-item'

class Directory extends Component {

    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/FxRWrgc/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                  },
                  {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/yg01RSC/jackets.png',
                    id: 2,
                    linkUrl: 'jackets'
                  },
                  {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/7knpkz7/sneakers.png',
                    id: 3,
                    linkUrl: 'sneakers'
                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/4fHPts1/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'womens'
                  },
                  {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/PDjwZwt/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'mens'
                  }
            ]
        };


    }

    render() {
        return(
            <div className = 'directory-menu'>
        
            {this.state.sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
            </div>
        )
    }
}

export default Directory;