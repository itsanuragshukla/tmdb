import React from 'react'
const keys = ["revenue",
    "budget",
    "homepage",
    "original_language",
    "title",
    "release_date",
    "runtime",
    "status",
    "tagline",
    "spoken_languages",
    "production_companies",
    "production_countries",
    "genres",
    "belongs_to_collection",
    "vote_average",
    "vote_count"];
const MovieInfoMain = (props) => {
    return (
        /*   Object.entries(props.data).map(([key, value])=> {
            if (key in keys) {
                return (
                    <div>
                <div>
                {
                	key
                }
                </div>
                <div>
                {
                        value.toString()
                }
                </div>
                 </div>
                );
            } else {
                return;
            }
        })*/

        keys.map(key => {
            return(<div>
                <div>
                {
                key.replaceAll("_", " ")
                }
            </div>
                <div>
                {
                props.data[key]  
			? (typeof props.data[key]) != 'object' 
			? props.data[key].toString()
			: "object"
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
