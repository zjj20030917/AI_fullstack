import React, { useEffect } from 'react'
import { useComponentsStore } from '../../stores/components'
import type { Component } from '../../stores/components'
import { useComponentConfigStore } from '../../stores/component-config'

export default function EditArea() {
  const { components, addComponent, updateComponentProps } = useComponentsStore()
  const { componentConfig } = useComponentConfigStore()

  function renderComponents(components: Component[]): React.ReactNode {
    return components.map((component: Component) => {
      const config = componentConfig?.[component.name]
      if (!config?.component) { // 没有对应的组件，比如：'Page'
        return null
      }
      // 渲染组件
      return React.createElement(
        config.component,
        {
          key: component.id,
          ...config.defaultProps,
          ...component.props
        },
        renderComponents(component.children || [])  // 递归渲染整个 json 树
      )
    })
  }

  return (
    <div className='h-[100%]'>
      {renderComponents(components)}
    </div>
  )
}
