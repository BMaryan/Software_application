const ADD_MESSAGE = "software_application/dialogs/ADD-MESSAGE";

let initialState = {
	dialogs: [
		{
			id: 1,
			name: "Group",
			img: "http://demo.foxthemes.net/socialitev2.0/assets/images/avatars/avatar-1.jpg",
			wroteDaysAgo: "3 days ago",
			message: "Hello!",
		},
		{
			id: 2,
			name: "Vitalik",
			img: "http://demo.foxthemes.net/socialitev2.0/assets/images/avatars/avatar-4.jpg",
			wroteDaysAgo: "2 days ago",
			message: "Hello, how are you?",
		},
		{
			id: 3,
			name: "Julia",
			img: "https://themified.com/friend-finder/images/users/user-10.jpg",
			wroteDaysAgo: "1 days ago",
			message: "Hi!",
		},
		{
			id: 4,
			name: "Other",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVo57Om4-HFUmpVEc3DcXA_dy_u4-3TmGV2w&usqp=CAU",
			wroteDaysAgo: "1 days ago",
			message: "Hello, how are you?",
		},
		{
			id: 5,
			name: "Kristy",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpziMqJ94SJUk1xcZ-x0yEVcTpJnrg-VX0qQ&usqp=CAU",
			wroteDaysAgo: "5 days ago",
			message: "(^-^)",
		},
		{
			id: 6,
			name: "Oleg",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJyhFq95w95c2litSUl5GuMvWrB83r-17ZxQ&usqp=CAU",
			wroteDaysAgo: "2 days ago",
			message: "What...)",
		},
		{
			id: 7,
			name: "Andriy",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuRJOEamJLWZhmH8AY8iD8EkRyAMkZVOWwA&usqp=CAU",
			wroteDaysAgo: "14 days ago",
			message: "Yo!",
		},
		{
			id: 8,
			name: "Maks",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZRIpfleE2xJJoH-UbcT-HXt6U0HoXAY4TOw&usqp=CAU",
			wroteDaysAgo: "1 days ago",
			message: "See you soon!",
		},
	],
	messages: [
		{
			id: 1,
			name: "Nazar",
			img: "http://demo.foxthemes.net/socialitev2.0/assets/images/avatars/avatar-1.jpg",
			wroteDaysAgo: "3 days ago",
			message: "Hello, how are you?",
		},
		{
			id: 2,
			name: "Vitalik",
			img: "http://demo.foxthemes.net/socialitev2.0/assets/images/avatars/avatar-4.jpg",
			wroteDaysAgo: "2 days ago",
			message: "Hi, I'm ok!",
		},
		{
			id: 3,
			name: "Nazar",
			img: "http://demo.foxthemes.net/socialitev2.0/assets/images/avatars/avatar-1.jpg",
			wroteDaysAgo: "1 days ago",
			message: "What do you do?",
		},
		{
			id: 4,
			name: "Vitalik",
			img: "http://demo.foxthemes.net/socialitev2.0/assets/images/avatars/avatar-4.jpg",
			wroteDaysAgo: "1 days ago",
			message: "I'm watching a football...)",
		},
	],
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			let newMessage = {
				id: action.id,
				name: action.name,
				img: action.img,
				wroteDaysAgo: 1,
				message: action.newMessageText,
			};
			return {
				...state,
				messages: [...state.messages, newMessage],
			};
		}
		default: {
			return state;
		}
	}
};

export const addMessageActionCreator = (id, name, img, newMessageText) => ({ type: ADD_MESSAGE, id, name, img, newMessageText });

export default dialogsReducer;
