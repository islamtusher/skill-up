const useAuth = () => {
    // console.log('auth');
    const accessToken = localStorage.getItem('accessToken')
    return accessToken
}

export default useAuth