import React from 'react'
const keys = [
    "title",
    "tagline",
    "status",
    "release_date",
    "spoken_languages",
    "original_language",
    "homepage",
    "production_companies",
    "production_countries",
    "genres",
    "belongs_to_collection",
    "runtime",
    "budget",
    "revenue",
    "vote_average",
    "vote_count"];

const openObj = (obj) => {
    return(Object.entries(obj).map(([key, value])=> {
        return (
            <div>
                <div>
                {
                value
                ? (typeof value) === 'object'
                ? openObj(value): value && key == "name"
                ? value.toString(): null: "not available"
                }
            </div>
            </div>
        );
    }))
}
const MovieInfoMain = (props) => {
    return (

        keys.map(key => {
            return(<div key={key}>
                <div>
                {
                key.replaceAll("_", " ")
                }
            </div>
                <div>
                {
                props.data[key] !== null
                ? (typeof props.data[key]) !== 'object'
                ? key !== "homepage"
                ? props.data[key].toString()
		: <a style={{ "textTransform": "lowercase" }}href={props.data[key]}>{props.data[key]}</a>
		: openObj(props.data[key])
		: "not available"
                }
            </div>
            </div>
            )
        })

    )
}
export {
    MovieInfoMain
}
