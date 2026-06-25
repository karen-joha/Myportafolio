import { ref } from 'vue'
import { db } from '../firebase'
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore'

export function useProjects() {
  const projects = ref([])
  const loading = ref(true)
  const error = ref(null)

  async function fetchProjects() {
    loading.value = true
    error.value = null
    try {
      // Solo trae proyectos donde visible === true
      const q = query(
        collection(db, 'projects'),
        where('visible', '==', true)
      )
      const snapshot = await getDocs(q)
      projects.value = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
    } catch (err) {
      console.error('Error cargando proyectos:', err)
      error.value = 'No se pudieron cargar los proyectos.'
    } finally {
      loading.value = false
    }
  }

  fetchProjects()

  return { projects, loading, error }
}
