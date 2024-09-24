import { ref, push, set, get, remove } from 'firebase/database';
import { db } from './firebase';
import { Homestay } from '../types/homestay';

const homestaysRef = ref(db, 'homestays');

export const getHomestays = async (): Promise<Homestay[]> => {
  const snapshot = await get(homestaysRef);
  if (snapshot.exists()) {
    return Object.entries(snapshot.val()).map(([id, data]) => ({
      id,
      ...(data as Omit<Homestay, 'id'>),
    }));
  }
  return [];
};

export const getHomestay = async (id: string): Promise<Homestay | null> => {
  const snapshot = await get(ref(db, `homestays/${id}`));
  if (snapshot.exists()) {
    return { id, ...(snapshot.val() as Omit<Homestay, 'id'>) };
  }
  return null;
};

export const createHomestay = async (homestay: Omit<Homestay, 'id'>): Promise<string> => {
  const newHomestayRef = push(homestaysRef);
  await set(newHomestayRef, homestay);
  return newHomestayRef.key as string;
};

export const updateHomestay = async (id: string, homestay: Partial<Homestay>): Promise<void> => {
  await set(ref(db, `homestays/${id}`), homestay);
};

export const deleteHomestay = async (id: string): Promise<void> => {
  await remove(ref(db, `homestays/${id}`));
};