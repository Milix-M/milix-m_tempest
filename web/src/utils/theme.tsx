'use client'

import { useTheme } from 'next-themes'

const useSwitchTheme = () => {
  const { theme, setTheme } = useTheme()

  function switchTheme () {
    switch (theme) {
      case 'dim':
        setTheme('light')
        break
      case 'light':
        setTheme('dim')
        break
      default:
        setTheme('dim')
        break
    }
  }

  return switchTheme
}

export default useSwitchTheme
