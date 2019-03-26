function openShoppingBag () {
  return {
    type: 'OPEN_SHOPPING_BAG',
  }
}

function closeShoppingBag () {
  return {
    type: 'CLOSE_SHOPPING_BAG'
  }
}

export function toggleShoppingBag() {
  const body = document.querySelector('body')
  const overlay = document.querySelector('.overlay')
  return (dispatch, getState) => {
    if(getState().shoppingBag.shoppingBagOpen) {
      dispatch(closeShoppingBag())
      overlay.classList.add('is-hidden')
      body.classList.remove('not-scrollable')
    } else {
      dispatch(openShoppingBag())
      overlay.classList.remove('is-hidden')
      body.classList.add('not-scrollable')

    }
  }
}

