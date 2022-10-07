import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
        apiKey: "AIzaSyBNLl05AB2Idp_VkUJN9vFuDj2ykbrQcNc",
        authDomain: "auth-development-d8e87.firebaseapp.com",
        projectId: "auth-development-d8e87",
        storageBucket: "auth-development-d8e87.appspot.com",
        messagingSenderId: "286719043645",
        appId: "1:286719043645:web:63d5cd2b97baafe84d2254"
})

export const auth = app.auth()
export default app