import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  getDoc, 
  getDocs,
  query,
  where 
} from 'firebase/firestore';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app;
  private db;

  constructor() {
    const firebaseConfig = {
      apiKey: environment.firebase.apiKey,
      authDomain: environment.firebase.authDomain,
      projectId: environment.firebase.projectId,
      storageBucket: environment.firebase.storageBucket,
      messagingSenderId: environment.firebase.messagingSenderId,
      appId: environment.firebase.appId
    };

    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
  }

  async getDigimon(id: string) {
    const docRef = doc(this.db, 'digimon', id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  }

  async getAllDigimon() {
    const querySnapshot = await getDocs(collection(this.db, 'digimon'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async getDigimonBySeries(seriesId: string) {
    const q = query(
      collection(this.db, 'digimon'),
      where('firstAppearance.series', '==', seriesId)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async getSeries(id: string) {
    const docRef = doc(this.db, 'series', id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  }

  async getAllSeries() {
    const querySnapshot = await getDocs(collection(this.db, 'series'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}