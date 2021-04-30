const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", imgProfile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gi5CDty4l6bxTwEBIBYrIFNuMrZNsb0COw&usqp=CAU", imgCover: "https://themified.com/friend-finder/images/covers/6.jpg",currentLikes: 284},
        {id: 2, message: "Lorem ipsum consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.   ", imgProfile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gi5CDty4l6bxTwEBIBYrIFNuMrZNsb0COw&usqp=CAU", imgCover: "https://themified.com/friend-finder/images/covers/5.jpg" ,currentLikes: 405},
    ],
    newPostText: ""
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: { 
            let newPost ={
                id: state.posts.length + 1,
                message: state.newPostText,
                imgCover: "https://themified.com/friend-finder/images/covers/3.jpg",
                imgProfile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gi5CDty4l6bxTwEBIBYrIFNuMrZNsb0COw&usqp=CAU",
                currentLikes: 120,
            }
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, newPost]
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default: {
            return state;
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (messageInput) => ({ type: UPDATE_NEW_POST_TEXT, newText: messageInput });

export default profileReducer;