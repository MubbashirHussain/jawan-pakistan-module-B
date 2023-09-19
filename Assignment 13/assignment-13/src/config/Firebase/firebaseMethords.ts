import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { getDatabase, ref as dbref, set } from "firebase/database"
import app from "./FirebaseConfig"


let Auth = getAuth(app)
let db = getDatabase(app)

let FirebaseSignup = (UserData: any) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(Auth, UserData.Email, UserData.Password)
            .then((res) => {
                console.log(UserData)
                let id = res.user.uid; UserData.id = id;
                let referance = dbref(db, `user/${id}`)
                set(referance, UserData)
                    .then((res) => resolve(res))
                    .catch((er) => reject(er))
            }).catch((er => reject(er)))
    })


}

let FirebaseLogin = (UserData: any) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(Auth, UserData.Email, UserData.Password)
            .then((res) => {
                resolve(res.user)
            }).catch((er) => reject(er))
    })
}



export { FirebaseLogin, FirebaseSignup }