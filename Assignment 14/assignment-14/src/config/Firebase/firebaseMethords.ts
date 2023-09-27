import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { getDatabase, ref as dbref, set, ref, push, onValue } from "firebase/database"
import app from "./FirebaseConfig"
import { promises } from "dns"


let Auth = getAuth(app)
let db = getDatabase(app)

let FirebaseSignup = (UserData: any) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(Auth, UserData.Email, UserData.Password)
            .then((res) => { let data = { res, UserData }; resolve(data) }).catch((er => { let data = { er, UserData }; reject(data) }))
    })
}

let FirebaseLogin = (UserData: any) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(Auth, UserData.Email, UserData.Password)
            .then((res) => { let data = { res, UserData }; resolve(data) }).catch((er => { let data = { er, UserData }; reject(data) }))
    })
}

let FirebaseSetData = (path: string, Obj: any, key?: any) => {
    return new Promise((resolve, reject) => {
        let Unieqkey = push(dbref(db, "/")).key
        let DbRef = dbref(db, `${path}/${key ?? Unieqkey}`)
        Obj.id = key ?? Unieqkey
        set(DbRef, Obj)
            .then((res) => resolve(res))
            .catch((er) => reject(er))
    })

}

let FirebaseGetData = (path:string) =>{
    return new Promise((resolve, reject) => {
        let DbRef = dbref(db, `${path}`)
        onValue(DbRef,(snap)=>{
            if(snap.exists()){
                resolve(snap.val())
            }
        })
    })}


export { FirebaseLogin, FirebaseSignup, FirebaseSetData  , FirebaseGetData}