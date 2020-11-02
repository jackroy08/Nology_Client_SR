import { firestore } from "./../firebase";

const getNewsItems  = (team) => {
    if(team === "All"){
        return firestore.collection("newsItems").get().then(response => response.docs.map(document => document.data()));
    }else{
        return firestore.collection("newsItems").where("team","==",team).get().then(response => response.docs.map(document => document.data()));
    }  
}

const subscribeToNewsItems = (setState,team) => {
    if(team === "All"){
        return firestore.collection("newsItems").onSnapshot(snapshot => setState(snapshot.docs.map(document => document.data())))        
    }else{
        return firestore.collection("newsItems").where("team","==",team).onSnapshot(snapshot => setState(snapshot.docs.map(document => document.data())))
    }
    
}

const createNewsItem  = (newsItem) => {
    firestore.collection("newsItems").add({...newsItem});
}

// //what should this fucntion do
// const updatenewsItem  = () => {
//     console.log("update newsItems here") 
// }

// const deletenewsItem  = () => {
//     console.log("delete newsItems here")
// }

export { getNewsItems, subscribeToNewsItems, createNewsItem };


//News items should conform to this:
// }
//     title: null,                  //
//     message: null,                //
//     team: "Managment",            //
//     type:"Supervisor Report",     //
//     isImportant: true,            //
//     seenBy: [],                   //Array of users who have viewed this
//     info: {}                      //additional info based on type. eg report numbers, vehicles
// }