
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';


export const createUser =async (email: string, password: string) => {
    const auth = getAuth();

    const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    ).catch((err) => {
        console.log("sign in with email password err =>  ", err)
    });
    return credentials;
}

export const signInUser =async (email: string, password: string) => {
    const auth = getAuth();

    const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
    ).catch((err) => {
        console.log("sign in with email password err =>  ", err)
    });
    return credentials;
}


export const initUser =async () => {
    const auth = getAuth();
    const firebaseUser = useFirebaseUser();
    firebaseUser.value = auth.currentUser

    const userCookie = useCookie('userCookie');

    onAuthStateChanged(auth, (user) => {
       if(user){
        const uid = user?.uid
        console.log("logged in: ", uid);
       } else {
        console.log("logged out", user)
       }
       firebaseUser.value = user

       userCookie.value = user;

       $fetch("/api/auth", {
        method: "POST",
        body: { user },
      });
    })
}

export const signOutUser = async () => {
    const auth = getAuth();
    const result = await auth.signOut();
}

