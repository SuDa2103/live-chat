import { ref } from "vue"
import { projectAuth } from '../firebase/config'

const error = ref(null)

const logout = async (email, password) => {
    error.value = null

    try {
        await projectAuth.signOut()
    } catch (err) {
        console.log(err.value)
        error.value = err.message
    }

}

const useLogout = () => {
    return { logout, error }
}

export default useLogout