export default class DataStore {
    static myInstance = null;
    
    movies=[
        {
            movieID:"m1",
            movieName:"Hidden Figures",
            year:2016,
            rating:7.8,
            image:require('../assets/hf.jpeg'),
        },
        {
            movieID:"m2",
            movieName:"Lion",
            year:2016,
            rating:8.0,
            image:require('../assets/lion.png'),
        },
    ]

    static getInstance() {
        if (Data.myInstance == null) {
            Data.myInstance = new Data();
        }
        return this.myInstance;
    };


    

}