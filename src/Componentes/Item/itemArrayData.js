import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

export async function getProductsByCategoryId(categoryId) {
    const db = getFirestore();
    const productosRef = collection(db, 'Productos');
    const categoryFilter = query(productosRef, where("categoria", "==", categoryId));
    const res = await getDocs(categoryFilter);
    return res.docs.map(prod => ({ ...prod.data(), id: prod.id, }));
}