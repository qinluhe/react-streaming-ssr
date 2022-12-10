import { useData } from './data';

export default function (WrappedComponent) {
  return function ({ ...props }) {

    const resource = useData();
    const id = WrappedComponent.getDataId();
    const isClientSide = typeof window !== 'undefined';
    let data;
    
    if (isClientSide) {
        
        const dataElement = document.querySelector(`#${id}`);
        const serverData = JSON.parse(dataElement.dataset.serverData || '');

        if (serverData) {
          data = serverData;
        }
    }
    // 其他 case 下使用 data fetching 获取数据（服务端、客户端是同构的）
    if (!data) {
      data = WrappedComponent.getFetchingProps(resource);
    }

    return <>
    <div id={id} data-server-data={JSON.stringify(data)} />
    <WrappedComponent {...props} data={data} />
    </>;
  }
};