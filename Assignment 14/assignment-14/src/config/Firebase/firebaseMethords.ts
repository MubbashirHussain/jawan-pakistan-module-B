import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import { getDatabase, ref as dbref, set, push, onValue, update } from "firebase/database"
import app from "./FirebaseConfig"


let auth = getAuth(app)
let db = getDatabase(app)

let FirebaseSignup = (UserData: any) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, UserData.Email, UserData.Password)
            .then((res: any) => { let data = { res, UserData }; resolve(data) }).catch(((er: any) => { let data = { er, UserData }; reject(data) }))
    })
}

let FirebaseLogin = (UserData: any) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, UserData.Email, UserData.Password)
            .then((res: any) => { let data = { res, UserData }; resolve(data) }).catch(((er: any) => { let data = { er, UserData }; reject(data) }))
    })
}

let FirebaseSetData = (path: string, Obj: any, key?: any) => {
    return new Promise((resolve, reject) => {
        let Unieqkey = push(dbref(db, "/")).key
        let DbRef = dbref(db, `${path}/${key ?? Unieqkey}`)
        Obj.id = key ?? Unieqkey
        set(DbRef, Obj)
            .then((res: any) => resolve(res))
            .catch((er: any) => reject(er))
    })

}

let FirebaseGetData = (path: string) => {
    return new Promise((resolve, reject) => {
        let DbRef = dbref(db, `${path}`)
        onValue(DbRef, (snap: any) => {
            if (snap.exists()) resolve(snap.val())
            else reject(snap)
        })
    })
}

let FirebaseUpdateData = (path: string, id: number | string, Obj: any) => {
    return new Promise((resolve, reject) => {
        let DbRef = dbref(db, `${path}/${id}`)
        update(DbRef, Obj)
            .then((res: any) => resolve(res))
            .catch((er: any) => reject(er))
    })
}


let FirebaseLogout = () => {
    return new Promise((resolve, reject) => {
        signOut(auth).then((e) => {
            resolve(e)
            // Sign-out successful.
        }).catch((error) => {
            reject(error)
            // An error happened.
        });
    })
}

const isUserLogin = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve(user)
            } else {
                reject("User not Login")
            }
        });
    });
}


export { FirebaseLogin, FirebaseSignup, FirebaseSetData, FirebaseGetData, FirebaseUpdateData, FirebaseLogout ,isUserLogin }