const localStorage = () => {
    let auth = true
    localStorage.setItem('auth', auth)
    const lsAuth = localStorage.getItem('auth')
    console.log(lsAuth)
    console.log(auth == JSON.parse(lsAuth))

    let obj = {
        name: 'Mati',
        location: 'ARG'
    }
    localStorage.setItem('user', JSON.stringify(obj))
    const user = JSON.parse(localStorage.getItem('user'))
    const userParsed = JSON.parse(user)
    console.log(user)

    localStorage.removeItem('auth')
    localStorage.clear()
}