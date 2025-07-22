import { useMemo } from 'react'
import { useComponentConfigStore } from '../../stores/component-config'
import  MaterialItem  from '../MaterialItem'

export default function Materail() {
  const { componentConfig } = useComponentConfigStore()
  const components = useMemo(() => {
    return Object.values(componentConfig)  // [{xx}, {xx}, {xx}]
  }, [componentConfig])

  return (
    <div>
      {
        components.map((item) => {
          return <MaterialItem key={item.name} name={item.name} />
        })
      }
    </div>
  )
}
