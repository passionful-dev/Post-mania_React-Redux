const initState = {
  posts: [
    {id: '1', title: 'Chess steps', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum modi dignissimos suscipit, est iure praesentium corrupti nesciunt dolore facilis voluptates, veritatis distinctio quo inventore labore non repellat, necessitatibus voluptas nam?'},
    {id: '2', title: "Mantis fights back", body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum modi dignissimos suscipit, est iure praesentium corrupti nesciunt dolore facilis voluptates, veritatis distinctio quo inventore labore non repellat, necessitatibus voluptas nam?'},
    {id: '3', title: 'Life with smile', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum modi dignissimos suscipit, est iure praesentium corrupti nesciunt dolore facilis voluptates, veritatis distinctio quo inventore labore non repellat, necessitatibus voluptas nam?'}
  ]  
}

const rootReducer = (state = initState, action) => {
  if(action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id
    });
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
}

export default rootReducer