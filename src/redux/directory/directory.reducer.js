const INITIAL_STATE = {
    sections: [
        { title: 'SKIPPING ROPE', imageUrl: '/assets/advance-adult-skipping-rope-red.jpg', size: '', id: 1,linkUrl : "runing" },
        { title: 'SHOES', imageUrl: '/assets/shoes.jpg', size: '', id: 2 ,linkUrl : "shoes"},
        { title: 'CAPS', imageUrl: '/assets/cap.jpg', size: '', id: 3 ,linkUrl : "cap"},
        { title: 'GLOVES', imageUrl:  '/assets/weight-training-glove-900-with-wrist-strap-black-with-grey.jpg', size:'', id: 4 ,linkUrl : "boxing"},
        { title: 'T-SHIRT', imageUrl: '/assets/gymTee.jpg', size: '', id: 5 ,linkUrl : "tee"}
    ]
};
  
const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.payload) {
        default:
            return state;
    }

}

export default directoryReducer;