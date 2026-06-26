import { ref } from 'vue'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'

export function useAbout() {
  const about = ref(null)
  const loading = ref(true)
  const error = ref(null)

  async function fetchAbout() {
    loading.value = true
    error.value = null

    try {
      const docRef = doc(db, 'about', 'profile')
      const snapshot = await getDoc(docRef)

      if (snapshot.exists()) {
        about.value = snapshot.data()
      }
    } catch (err) {
      console.error(err)
      error.value = 'No se pudo cargar la información.'
    } finally {
      loading.value = false
    }
  }

  fetchAbout()

  return {
    about,
    loading,
    error
  }
}