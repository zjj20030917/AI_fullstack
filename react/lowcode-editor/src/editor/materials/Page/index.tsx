import { useDrop } from 'react-dnd'
import { message } from 'antd'
import { useComponentsStore } from '../../stores/components'
import { useComponentConfigStore } from '../../stores/component-config'
import type { CommonComponentProps } from '../../interface'

export default function Page({id, name, children}: CommonComponentProps) {

  const [messageApi, contextHolder] = message.useMessage();
  const { addComponent } = useComponentsStore()
  const { componentConfig } = useComponentConfigStore()

  const [{canDrop}, dropRef] = useDrop(() => ({
    accept: ['Button', 'Container', 'Page'],
    drop: (item: {type: string}) => {
      messageApi.success(item.type)
      // 将该组件的对象植入到 json 中
      const props = componentConfig?.[item.type]?.defaultProps
      addComponent({
        id: new Date().getTime(),
        name: item.type,
        props: props
      }, id)
    },
    collect: (monitor) => {  // 接受区域
      return {
        canDrop: monitor.canDrop()
      }
    }
  }))

  return (
    <>
      {contextHolder}
      <div 
        ref={dropRef} 
        className='p-[20px] h-[100%] box-border'
        style={{border: canDrop ? '2px solid blue' : 'none'}}
      >
        {children}
      </div>
    </>
  )
}