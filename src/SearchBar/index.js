import React, {
    useState,
    useEffect,
    useRef
} from 'react'
import {
    Wrapper,
    Search,
    Icon,
    Input
} from './SearchBar.styles'

import {
    SearchIcon
} from './SearchIcon'

const SearchBar = (props) => {
    const initial = useRef(true);
    const [state,
        setState] = useState("")

    useEffect(()=> {
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(()=> {
            props.callback(state);
        }, 500);
        return () => clearTimeout(timer);
    },
        [state])
    return (<Wrapper>
                <Search><Icon>
                    <SearchIcon />
                </Icon>
                <Input>
                    <input type="search" placeholder="Search Movie ..." name="searchTerm" value={state} onChange={event => setState(event.target.value)} />
                </Input>
                </Search>
                </Wrapper>
    )
}
export default SearchBar
