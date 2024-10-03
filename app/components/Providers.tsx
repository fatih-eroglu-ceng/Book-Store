'use client'

import React, { useEffect, useState } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { SessionProvider } from 'next-auth/react'
import { createStore } from '../redux/store'

export default function Providers({ children }: { children: React.ReactNode }) {
  const [store, setStore] = useState<any>(null)
  const [persistor, setPersistor] = useState<any>(null)

  useEffect(() => {
    const setupStore = async () => {
      const { store: newStore, persistor: newPersistor } = await createStore()
      setStore(newStore)
      setPersistor(newPersistor)
    }
    setupStore()
  }, [])

  if (!store || !persistor) {
    return null
  }

  return (
    <SessionProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </ReduxProvider>
    </SessionProvider>
  )
}
