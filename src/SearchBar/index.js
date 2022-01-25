import React from 'react'
import {
    Wrapper,
    Search,
    Icon,
    Input
} from './SearchBar.styles'

import {
    SearchIcon
} from './SearchIcon'

class SearchBar extends React.Component {

    constructor(props) {
        super()
    }


    render() {
        return (<Wrapper>
                <Search>
                <Icon>
                    <SearchIcon />
                </Icon>
                <Input>
                    <input type="text" placeholder="Search Movie ..." name="searchTerm" value={this.props.searchTerm} onChange={this.props.callback} />
                </Input>
                </Search>
                </Wrapper>
        )
    }
}
export default SearchBar