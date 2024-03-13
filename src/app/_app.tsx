"use client"
import App from 'next/app'
import firebase, {FirebaseContext} from './firebase'

const MyApp = ({children,}:Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <FirebaseContext.Provider value={{
        firebase
    }}>
        {children}

    </FirebaseContext.Provider>
  )
}

export default MyApp
