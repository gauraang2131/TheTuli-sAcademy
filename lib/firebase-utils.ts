import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export const submitForm = async (collectionName: string, data: any) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), {
            ...data,
            submittedAt: serverTimestamp(),
        });
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error("Error adding document: ", error);
        return { success: false, error };
    }
};
