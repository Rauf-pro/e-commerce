

export const porudctsAction = () => async (dispatch) => {
    const data = await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    dispatch({type: 'GET_PRODUCTS', payload: data})
  
}

export const porudctsActionDetail = (id) => async (dispatch) => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    dispatch({type: 'GET_DETAILS', payload: data})
  
}