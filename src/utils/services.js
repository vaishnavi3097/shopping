import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/photos'

// export function getDetails(){
//     return(
//         axios.get(url)
//     )
// }

export function getItemListsWithAxios(){
    return(
        axios.get(url)
    )
}

export function getItemWithAxios(id){
    return(
        axios.get(`${url}/${id}`)
    )
}