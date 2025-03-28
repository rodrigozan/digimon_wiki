import { Injectable } from '@angular/core';
import { initializeApp, FirebaseApp } from 'firebase/app';
import {
  getFirestore,
  Firestore,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where
} from 'firebase/firestore';

import { environment } from 'src/environments/environment';
import { Digimon } from 'src/app/models/digimon';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app: FirebaseApp;
  private db: Firestore;

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

  async getDigimon(id: string): Promise<Digimon | null> {
    const docRef = doc(this.db, 'digimon', id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) return null;
    return {
      id: docSnap.id,
      ...(docSnap.data() as Omit<Digimon, 'id'>)
    };
  }

  async getAllDigimon(): Promise<Digimon[]> {
    const querySnapshot = await getDocs(collection(this.db, 'digimon'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<Digimon, 'id'>)
    }));
  }

  async getDigimonBySeries(seriesId: string): Promise<Digimon[]> {
    const q = query(
      collection(this.db, 'digimon'),
      where('firstAppearance.series', '==', seriesId)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<Digimon, 'id'>)
    }));
  }

  async getSeries(id: string): Promise<any | null> {
    const docRef = doc(this.db, 'series', id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
  }

  async getAllSeries(): Promise<any[]> {
    const querySnapshot = await getDocs(collection(this.db, 'series'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }

  async getAllTypes(): Promise<any[]> {
    const querySnapshot = await getDocs(collection(this.db, 'types'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }
}
