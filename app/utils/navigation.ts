import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export const handleBackClick = (router: AppRouterInstance) => {
  const previousPage = localStorage.getItem('previousPage')
  if (previousPage) {
    router.push(previousPage)
  } else {
    router.back()
  }
}
