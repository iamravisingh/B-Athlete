const INITIAL_STATE = {
    sections: [
        { title: 'SKIPPING ROPE', imageUrl: '/skipping-muscle.jpg', size: '', id: 1,linkUrl : "runing" },
        { title: 'SHOES', imageUrl: '/adidas-nmd.png', size: '', id: 2 ,linkUrl : "shoes"},
        { title: 'CAPS', imageUrl: '/cap.jpg', size: '', id: 3 ,linkUrl : "cap"},
        { title: 'GLOVES', imageUrl:  '/cap.jpeg', size:'', id: 4 ,linkUrl : "boxing"},
        { title: 'T-SHIRT', imageUrl: '/long-sleeve.png', size: '', id: 5 ,linkUrl : "tee"}
    ]
};
  
const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.payload) {
        default:
            return state;
    }

}

export default directoryReducer;