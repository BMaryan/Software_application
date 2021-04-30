import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
        _state: {
            profilePage: {
                posts: [
                    {id: 1, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", imgProfile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNe33Xl1pnia_qMRyiiticS-AsosPyn36eHarZdWW77vib9OOu7kYNCTKYgg9k27nEg8Y&usqp=CAU", imgCover: "https://themified.com/friend-finder/images/covers/6.jpg",currentLikes: 284},
                    {id: 2, message: "Lorem ipsum consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.   ", imgProfile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2-sCzHWL0m_zdif0_gKvmlF7ffSYGXIR10MG33F2J9LLY1nvs5f6jUUEgBXuMsVI7jg&usqp=CAU", imgCover: "https://themified.com/friend-finder/images/covers/5.jpg" ,currentLikes: 405},
                ],
                newPostText: ""
            },
            dialogsPage: {
                dialogs: [
                    {id: 1, name: "Nazar", img: "http://demo.foxthemes.net/socialitev2.0/assets/images/avatars/avatar-1.jpg", wroteDaysAgo: "3 days ago", message: "Hello!"},
                    {id: 2, name: "Vitalik", img: "http://demo.foxthemes.net/socialitev2.0/assets/images/avatars/avatar-4.jpg", wroteDaysAgo: "2 days ago", message: "Hello, how are you?"},
                    {id: 3, name: "Julia", img: "https://themified.com/friend-finder/images/users/user-10.jpg", wroteDaysAgo: "1 days ago", message: "Hi!"},
                    {id: 4, name: "Other", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVo57Om4-HFUmpVEc3DcXA_dy_u4-3TmGV2w&usqp=CAU", wroteDaysAgo: "1 days ago", message: "Hello, how are you?"},
                    {id: 5, name: "Kristy", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpziMqJ94SJUk1xcZ-x0yEVcTpJnrg-VX0qQ&usqp=CAU", wroteDaysAgo: "5 days ago", message: "(^-^)"},
                    {id: 6, name: "Oleg", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJyhFq95w95c2litSUl5GuMvWrB83r-17ZxQ&usqp=CAU", wroteDaysAgo: "2 days ago", message: "What...)"},
                    {id: 7, name: "Andriy", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuRJOEamJLWZhmH8AY8iD8EkRyAMkZVOWwA&usqp=CAU", wroteDaysAgo: "14 days ago", message: "Yo!"},
                    {id: 8, name: "Maks", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZRIpfleE2xJJoH-UbcT-HXt6U0HoXAY4TOw&usqp=CAU", wroteDaysAgo: "1 days ago", message: "See you soon!"}
                ],
                messages: [
                    {id: 1, name: "Nazar" , img: "http://demo.foxthemes.net/socialitev2.0/assets/images/avatars/avatar-1.jpg", wroteDaysAgo: "3 days ago" , message: "Hello, how are you?"},
                    {id: 2, name: "Vitalik", img: "http://demo.foxthemes.net/socialitev2.0/assets/images/avatars/avatar-4.jpg", wroteDaysAgo: "2 days ago" , message: "Hi, I'm ok!"},
                    {id: 3, name: "Nazar", img: "http://demo.foxthemes.net/socialitev2.0/assets/images/avatars/avatar-1.jpg", wroteDaysAgo: "1 days ago" , message: "What do you do?"},
                    {id: 4, name: "Vitalik", img: "http://demo.foxthemes.net/socialitev2.0/assets/images/avatars/avatar-4.jpg", wroteDaysAgo: "1 days ago" , message: "I'm watching a football...)"},
                    {id: 5, name: "Nazar", img: "http://demo.foxthemes.net/socialitev2.0/assets/images/avatars/avatar-1.jpg", wroteDaysAgo: "1 days ago" , message: "And, you?"},
                    {id: 6, name: "Vitalik", img: "http://demo.foxthemes.net/socialitev2.0/assets/images/avatars/avatar-4.jpg", wroteDaysAgo: "1 days ago" , message: "I'm eating now)"}
                ],
                newMessageText: ""
            }
        },
        _callSubscriber() {
            console.log("Hello");
        },

        getState() {
            return this._state;
        },
        subscribe(observer) {
            this._callSubscriber = observer;
        },

        dispatch(action) {
            this._state.profilePage = profileReducer(this._state.profilePage, action);
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

            this._callSubscriber(this._state);
        }
}

export default store;